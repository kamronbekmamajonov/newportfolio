export interface ContactFormPayload {
  readonly name: string;
  readonly contact: string;
  readonly message: string;
  readonly source?: 'contact-section' | 'contact-modal';
}

export interface ContactSubmissionResult {
  readonly ok: boolean;
  readonly code?: 'VALIDATION_ERROR' | 'ENDPOINT_NOT_CONFIGURED' | 'NETWORK_ERROR';
  readonly message: string;
}

const PLACEHOLDER_VALUES = new Set([
  '',
  'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL',
  'MY_GOOGLE_SHEETS_WEB_APP_URL',
]);

/**
 * Safely reads the configured Google Apps Script Web App URL from Vite env.
 * Never exposes private credentials or secrets.
 */
export function getConfiguredGoogleSheetsWebAppUrl(customUrl?: string): string {
  if (typeof customUrl === 'string') {
    return customUrl.trim();
  }
  try {
    const metaEnv = (import.meta as unknown as { env?: Record<string, string | undefined> }).env;
    const raw = metaEnv?.VITE_GOOGLE_SHEETS_WEB_APP_URL ?? '';
    return raw.trim();
  } catch {
    return '';
  }
}

/**
 * Verifies whether a real Google Apps Script Web App URL (https://...) is configured.
 */
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

/**
 * Validates required contact form fields and returns Uzbek error messages when invalid.
 */
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
      message: 'Iltimos, telefon raqamingiz yoki Telegram manzilingizni kiriting.',
    };
  }

  return { valid: true };
}

/**
 * Sends a validated contact form submission to the configured Google Apps Script Web App endpoint.
 * Uses text/plain JSON payload to avoid CORS preflight failures on script.google.com while
 * preserving full JSON parsing inside Apps Script doPost(e).
 */
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
        'Google Sheets integratsiyasi hali ulanmagan: VITE_GOOGLE_SHEETS_WEB_APP_URL sozlanmagan. Iltimos, Google Apps Script Web App havolasini sozlang.',
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
              'Ma’lumotlarni Google Sheets jadvaliga saqlashda xatolik yuz berdi. Qayta urinib ko‘ring.',
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
        'Xabarni yuborishda tarmoq xatoligi yuz berdi. Internet aloqangizni tekshirib, qayta urinib ko‘ring.',
    };
  }
}
