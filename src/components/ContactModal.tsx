import React from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../utils/portfolio.ts';
import { submitContactToGoogleSheets } from '../services/googleSheets.ts';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [name, setName] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [message, setMessage] = React.useState('');
  const isSubmittingRef = React.useRef(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmittingRef.current || isSubmitting) return;

    setSubmitError(null);
    isSubmittingRef.current = true;
    setIsSubmitting(true);

    try {
      const result = await submitContactToGoogleSheets({
        name,
        contact,
        message,
        source: 'contact-modal',
      });

      if (!result.ok) {
        setSubmitError(result.message);
        return;
      }

      setSubmitted(true);
    } finally {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="relative w-full max-w-lg p-6 sm:p-8 bg-white rounded-3xl border border-[#E2E8F0] shadow-2xl shadow-blue-500/10">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Yopish"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
            {PROFILE_DATA.role}
          </span>
          <h2
            id="contact-modal-title"
            className="text-2xl font-display font-bold text-[#111827] mt-1"
          >
            {PROFILE_DATA.name} bilan bog‘lanish
          </h2>
          <p className="text-sm text-[#64748B] mt-1">
            Loyihangiz bo‘yicha tizimli marketing va o‘sish strategiyasini muhokama qilamiz.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Xabaringiz qabul qilindi!</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-xs">
              Rahmat, {name}. Tez orada siz bilan ko‘rsatilgan aloqa vositasi orqali bog‘lanaman.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setSubmitError(null);
                setName('');
                setContact('');
                setMessage('');
                onClose();
              }}
              className="mt-6 px-5 py-2.5 bg-[#2563EB] text-white text-sm font-semibold rounded-full hover:bg-[#1D4ED8] transition-colors cursor-pointer"
            >
              Yopish
            </button>
          </div>
        ) : (
          <form noValidate onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Ismingiz yoki kompaniyangiz <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                disabled={isSubmitting}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (submitError) setSubmitError(null);
                }}
                placeholder="Masalan: Sardor Komilov"
                className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all disabled:opacity-60"
              />
            </div>

            <div>
              <label htmlFor="contact-handle" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Telefon raqamingiz yoki Telegram <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-handle"
                type="text"
                required
                disabled={isSubmitting}
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                  if (submitError) setSubmitError(null);
                }}
                placeholder="+998 90 123-45-67 yoki @username"
                className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all disabled:opacity-60"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Loyiha haqida qisqacha ma’lumot
              </label>
              <textarea
                id="contact-message"
                rows={3}
                disabled={isSubmitting}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Sohangiz, maqsadlaringiz va qaysi yo‘nalish (Kontent, SMM, Performance) kerakligi..."
                className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all resize-none disabled:opacity-60"
              />
            </div>

            {submitError && (
              <div
                role="alert"
                aria-live="polite"
                className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700 leading-relaxed"
              >
                {submitError}
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.99] text-white font-semibold text-sm rounded-full shadow-md shadow-blue-600/20 transition-all cursor-pointer disabled:opacity-60"
              >
                <span>{isSubmitting ? 'Yuborilmoqda...' : 'Xabarni yuborish'}</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
