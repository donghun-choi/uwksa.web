import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';
import { CursorMascot } from './components/CursorMascot';
import { HomePage } from './pages/HomePage';
import { MembershipPage } from './pages/MembershipPage';
import { EventsPage } from './pages/EventsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'ko'>('ko');
  const [isDark, setIsDark] = useState(true);
  const [currentPage, setCurrentPage] = useState('/');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || '/';
      setCurrentPage(hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ko' ? 'en' : 'ko');
  };

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <HomePage language={language} />;
      case '/membership':
        return <MembershipPage language={language} />;
      case '/events':
        return <EventsPage language={language} />;
      case '/gallery':
        return <GalleryPage language={language} />;
      case '/contact':
        return <ContactPage language={language} />;
      default:
        return <HomePage language={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors">
      <CursorMascot />
      <Header language={language} onLanguageToggle={toggleLanguage} />
      <main>
        {renderPage()}
      </main>
      <Footer language={language} />
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
    </div>
  );
}