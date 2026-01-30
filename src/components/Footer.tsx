import { Instagram, Mail, Music, MessageCircle } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ko';
}

export function Footer({ language }: FooterProps) {
  const text = language === 'ko'
    ? { contactTitle: '연락처', rights: '© 2026 UWKSA. All rights reserved.' }
    : { contactTitle: 'Contact Us', rights: '© 2026 UWKSA. All rights reserved.' };

  return (
    <footer className="py-16 bg-[#FDB813]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-slate-900 mb-6 font-bold" style={{ fontSize: "2rem" }}>{text.contactTitle}</h2>
          <div className="flex justify-center gap-4 flex-wrap mb-8">
            <a
              href="https://www.instagram.com/uwaterloo_ksa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors"
            >
              <Instagram className="text-white" size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@uwaterloo_ksa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors"
            >
              <Music className="text-white" size={24} />
            </a>
            <a
              href="https://discord.com/invite/9VZ6AGYY94"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors"
            >
              <MessageCircle className="text-white" size={24} />
            </a>
            <a
              href="mailto:uofwaterlooksa@gmail.com"
              aria-label="Email"
              className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors"
            >
              <Mail className="text-white" size={24} />
            </a>
          </div>
          <p className="text-slate-700 text-sm">{text.rights}</p>
        </div>
      </div>
    </footer>
  );
}
