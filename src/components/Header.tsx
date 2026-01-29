import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'ko';
  onLanguageToggle: () => void;
}

export function Header({ language, onLanguageToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = language === 'ko' 
    ? [
        { label: 'Home', href: '#/' },
        { label: '소개', href: '#/about' },
        { label: '멤버십', href: '#/membership' },
        { label: '이벤트', href: '#/events' },
        { label: '갤러리', href: '#/gallery' },
        { label: '소식', href: '#/contact' },
      ]
    : [
        { label: 'Home', href: '#/' },
        { label: 'About', href: '#/about' },
        { label: 'Membership', href: '#/membership' },
        { label: 'Events', href: '#/events' },
        { label: 'Gallery', href: '#/gallery' },
        { label: 'News', href: '#/contact' },
      ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Clickable */}
          <a href="#/" className="flex items-center">
            <span className="text-[#FDB813] tracking-wider hover:opacity-80 transition-opacity">UWKSA</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={onLanguageToggle}
              className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              aria-label="Toggle language"
            >
              <span>{language === 'ko' ? 'EN' : 'KO'}</span>
            </button>
          </div>

          {/* Mobile Menu Button and Language Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onLanguageToggle}
              className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-full"
              aria-label="Toggle language"
            >
              <span>{language === 'ko' ? 'EN' : 'KO'}</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}