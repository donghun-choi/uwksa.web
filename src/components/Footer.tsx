import { Instagram, Mail } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ko';
}

export function Footer({ language }: FooterProps) {
  const content = {
    ko: {
      quickLinks: 'Quick Links',
      about: '소개',
      events: '이벤트',
      membership: '멤버십',
      news: '소식',
      connect: 'Connect with Us',
      rights: '© 2025 UWKSA. All rights reserved.',
    },
    en: {
      quickLinks: 'Quick Links',
      about: 'About',
      events: 'Events',
      membership: 'Membership',
      news: 'News',
      connect: 'Connect with Us',
      rights: '© 2025 UWKSA. All rights reserved.',
    },
  };

  const text = content[language];

  return (
    <footer className="bg-slate-100 dark:bg-[#111111] border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-slate-900 dark:text-slate-100 mb-4">{text.quickLinks}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#/about" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                    {text.about}
                  </a>
                </li>
                <li>
                  <a href="#/events" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                    {text.events}
                  </a>
                </li>
                <li>
                  <a href="#/membership" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                    {text.membership}
                  </a>
                </li>
                <li>
                  <a href="#/contact" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                    {text.news}
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-slate-900 dark:text-slate-100 mb-4">{text.connect}</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/uwksa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center hover:border-[#FDB813] transition-all"
                >
                  <Instagram className="text-slate-600 dark:text-slate-400" size={20} />
                </a>
                <a
                  href="mailto:contact@uwksa.com"
                  aria-label="Email"
                  className="w-10 h-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center hover:border-[#FDB813] transition-all"
                >
                  <Mail className="text-slate-600 dark:text-slate-400" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-600 dark:text-slate-400">
            <p>{text.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}