import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  type User,
} from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json' with { type: 'json' };

export const SCOPES = [
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/drive.readonly',
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/spreadsheets.readonly',
] as const;

export interface ContactFormPayload {
  readonly name: string;
  readonly contact: string;
  readonly message: string;
  readonly source?: 'contact-section' | 'contact-modal';
}

export interface ContactSubmissionResult {
  readonly ok: boolean;
  readonly code?:
    | 'VALIDATION_ERROR'
    | 'ENDPOINT_NOT_CONFIGURED'
    | 'NEEDS_CONFIRMATION'
    | 'NETWORK_ERROR';
  readonly message: string;
}

export interface DriveSpreadsheetItem {
  readonly id: string;
  readonly name: string;
}

export interface ActiveSpreadsheetMeta {
  readonly spreadsheetId: string;
  readonly title: string;
  readonly firstSheetTitle: string;
  readonly spreadsheetUrl: string;
}

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
SCOPES.forEach((scope) => provider.addScope(scope));

// In-memory access token cache only (never stored in localStorage or sessionStorage)
let isSigningIn = false;
let cachedAccessToken: string | null = null;
let activeSpreadsheetMeta: ActiveSpreadsheetMeta | null = null;

export const initAuth = (
  onAuthSuccess?: (user: User, token: string) => void,
  onAuthFailure?: () => void
) => {
  if (typeof window === 'undefined') {
    return () => {};
  }
  return onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        cachedAccessToken = null;
        if (onAuthFailure) onAuthFailure();
      }
    } else {
      cachedAccessToken = null;
      if (onAuthFailure) onAuthFailure();
    }
  });
};

export const googleSignIn = async (): Promise<{
  user: User;
  accessToken: string;
} | null> => {
  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential?.accessToken) {
      throw new Error('Google hisobidan ruxsat tokeni olinmadi.');
    }

    cachedAccessToken = credential.accessToken;
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error: unknown) {
    console.error('Sign in error:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

export const getAccessToken = async (): Promise<string | null> => {
  return cachedAccessToken;
};

export const logout = async () => {
  await auth.signOut();
  cachedAccessToken = null;
  activeSpreadsheetMeta = null;
};

export const getActiveSpreadsheetMeta = (): ActiveSpreadsheetMeta | null =>
  activeSpreadsheetMeta;

export const setActiveSpreadsheetMeta = (
  meta: ActiveSpreadsheetMeta | null
): void => {
  activeSpreadsheetMeta = meta;
};

/**
 * Lists Google Sheets files from the user's Google Drive.
 */
export async function listDriveSpreadsheets(
  accessToken: string
): Promise<DriveSpreadsheetItem[]> {
  const query = encodeURIComponent(
    "mimeType='application/vnd.google-apps.spreadsheet' and trashed=false"
  );
  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files?q=${query}&pageSize=20&orderBy=modifiedTime desc&fields=files(id,name)`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  if (!res.ok) {
    throw new Error('Google Drive jadvallar ro‘yxatini olishda xatolik.');
  }
  const data = (await res.json()) as { files?: DriveSpreadsheetItem[] };
  return data.files || [];
}

/**
 * Fetches spreadsheet metadata including the real first tab title (never hardcoding "Sheet1").
 */
export async function fetchSpreadsheetMetadata(
  accessToken: string,
  spreadsheetId: string
): Promise<ActiveSpreadsheetMeta> {
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(
      spreadsheetId
    )}?fields=spreadsheetId,spreadsheetUrl,properties.title,sheets.properties.title`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  if (!res.ok) {
    throw new Error('Google Sheet ma’lumotlarini o‘qishda xatolik yuz berdi.');
  }
  const data = (await res.json()) as {
    spreadsheetId: string;
    spreadsheetUrl?: string;
    properties?: { title?: string };
    sheets?: Array<{ properties?: { title?: string } }>;
  };

  const firstSheetTitle =
    data.sheets?.[0]?.properties?.title || 'Murojaatlar';

  return {
    spreadsheetId: data.spreadsheetId,
    title: data.properties?.title || 'Google Sheet',
    firstSheetTitle,
    spreadsheetUrl:
      data.spreadsheetUrl ||
      `https://docs.google.com/spreadsheets/d/${data.spreadsheetId}/edit`,
  };
}

/**
 * Creates a new Google Sheet for portfolio contact leads and writes the header row.
 */
export async function createPortfolioContactsSheet(
  accessToken: string,
  title = 'Kamronbek Portfolio — Murojaatlar'
): Promise<ActiveSpreadsheetMeta> {
  const tabTitle = 'Murojaatlar';
  const createRes = await fetch(
    'https://sheets.googleapis.com/v4/spreadsheets',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: { title },
        sheets: [{ properties: { title: tabTitle } }],
      }),
    }
  );

  if (!createRes.ok) {
    throw new Error('Yangi Google Sheet yaratishda xatolik yuz berdi.');
  }

  const created = (await createRes.json()) as {
    spreadsheetId: string;
    spreadsheetUrl?: string;
    properties?: { title?: string };
    sheets?: Array<{ properties?: { title?: string } }>;
  };

  const actualTab = created.sheets?.[0]?.properties?.title || tabTitle;

  await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(
      created.spreadsheetId
    )}/values/${encodeURIComponent(actualTab)}!A1:E1?valueInputOption=USER_ENTERED`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [
          [
            'Vaqt',
            'Ism yoki Kompaniya',
            'Telefon / Telegram',
            'Loyiha haqida ma’lumot',
            'Manba',
          ],
        ],
      }),
    }
  );

  return {
    spreadsheetId: created.spreadsheetId,
    title: created.properties?.title || title,
    firstSheetTitle: actualTab,
    spreadsheetUrl:
      created.spreadsheetUrl ||
      `https://docs.google.com/spreadsheets/d/${created.spreadsheetId}/edit`,
  };
}

/**
 * Appends a verified contact submission row into the specified Google Sheet tab.
 */
export async function appendContactRowToSheet(
  accessToken: string,
  sheetMeta: ActiveSpreadsheetMeta,
  payload: ContactFormPayload
): Promise<void> {
  const timestamp = new Date().toLocaleString('uz-UZ', {
    timeZone: 'Asia/Tashkent',
  });
  const range = `${sheetMeta.firstSheetTitle}!A:E`;

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(
      sheetMeta.spreadsheetId
    )}/values/${encodeURIComponent(range)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [
          [
            timestamp,
            payload.name.trim(),
            payload.contact.trim(),
            payload.message.trim() || '—',
            payload.source || 'contact-section',
          ],
        ],
      }),
    }
  );

  if (!res.ok) {
    throw new Error('Google Sheets jadvaliga qator qo‘shishda xatolik yuz berdi.');
  }
}

const PLACEHOLDER_VALUES = new Set([
  '',
  'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL',
  'MY_GOOGLE_SHEETS_WEB_APP_URL',
]);

export function getConfiguredGoogleSheetsWebAppUrl(customUrl?: string): string {
  if (typeof customUrl === 'string') {
    return customUrl.trim();
  }
  try {
    const metaEnv = (
      import.meta as unknown as { env?: Record<string, string | undefined> }
    ).env;
    const raw = metaEnv?.VITE_GOOGLE_SHEETS_WEB_APP_URL ?? '';
    return raw.trim();
  } catch {
    return '';
  }
}

export function isGoogleSheetsEndpointConfigured(customUrl?: string): boolean {
  const url = getConfiguredGoogleSheetsWebAppUrl(customUrl);
  if (!url || PLACEHOLDER_VALUES.has(url)) {
    return false;
  }
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

export function validateContactFormInput(
  payload: ContactFormPayload
): { valid: true } | { valid: false; message: string } {
  const trimmedName = payload.name.trim();
  const trimmedContact = payload.contact.trim();

  if (!trimmedName) {
    return {
      valid: false,
      message: 'Iltimos, ismingiz yoki kompaniyangiz nomini kiriting.',
    };
  }

  if (!trimmedContact) {
    return {
      valid: false,
      message:
        'Iltimos, telefon raqamingiz yoki Telegram manzilingizni kiriting.',
    };
  }

  return { valid: true };
}

export async function submitContactToGoogleSheets(
  payload: ContactFormPayload,
  endpointOverride?: string
): Promise<ContactSubmissionResult> {
  const validation = validateContactFormInput(payload);
  if (!validation.valid) {
    return {
      ok: false,
      code: 'VALIDATION_ERROR',
      message: validation.message,
    };
  }

  const endpointUrl = getConfiguredGoogleSheetsWebAppUrl(endpointOverride);
  if (!isGoogleSheetsEndpointConfigured(endpointUrl)) {
    return {
      ok: false,
      code: 'ENDPOINT_NOT_CONFIGURED',
      message:
        'Google Sheets’ga yozish uchun Google hisobingiz orqali ulaning yoki VITE_GOOGLE_SHEETS_WEB_APP_URL manzilini kiriting.',
    };
  }

  const requestBody = {
    name: payload.name.trim(),
    contact: payload.contact.trim(),
    message: payload.message.trim(),
    source: payload.source || 'contact-section',
    submittedAt: new Date().toISOString(),
    pageUrl: typeof window !== 'undefined' ? window.location.href : '',
  };

  try {
    const response = await fetch(endpointUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const responseText = await response.text();
    if (responseText) {
      try {
        const parsed = JSON.parse(responseText) as {
          ok?: boolean;
          status?: string;
          error?: string;
        };
        if (parsed.ok === false || parsed.status === 'error') {
          return {
            ok: false,
            code: 'NETWORK_ERROR',
            message:
              parsed.error ||
              'Ma’lumotlarni Google Sheets jadvaliga saqlashda xatolik yuz berdi.',
          };
        }
      } catch {
        // Non-JSON 200 OK response from Apps Script is treated as success
      }
    }

    return {
      ok: true,
      message:
        'Xabaringiz muvaffaqiyatli qabul qilindi va Google Sheets jadvaliga yozildi!',
    };
  } catch {
    return {
      ok: false,
      code: 'NETWORK_ERROR',
      message:
        'Xabarni yuborishda tarmoq xatoligi yuz berdi. Qayta urinib ko‘ring.',
    };
  }
}
