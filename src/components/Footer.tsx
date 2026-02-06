import { socialLinks } from '../data/socialLinks';

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
          <h2 className="text-slate-900 mb-6 font-bold text-3xl">{text.contactTitle}</h2>
          <div className="flex justify-center gap-4 flex-wrap mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={link.label}
                className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors"
              >
                <link.icon className="text-white" size={24} />
              </a>
            ))}
          </div>
          <p className="text-slate-700 text-sm">{text.rights}</p>
        </div>
      </div>
    </footer>
  );
}
