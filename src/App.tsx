import { useState, useEffect, lazy, Suspense } from 'react';
import { AppProvider, useLanguage, useTheme } from './contexts/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';
import { CursorMascot } from './components/CursorMascot';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const MembershipPage = lazy(() => import('./pages/MembershipPage').then(m => ({ default: m.MembershipPage })));
const EventsPage = lazy(() => import('./pages/EventsPage').then(m => ({ default: m.EventsPage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then(m => ({ default: m.GalleryPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

// Loading fallback component
function PageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FDB813]"></div>
    </div>
  );
}

function AppContent() {
  const { language, toggleLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [currentPage, setCurrentPage] = useState('/');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || '/';
      setCurrentPage(hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
        <Suspense fallback={<PageLoading />}>
          {renderPage()}
        </Suspense>
      </main>
      <Footer language={language} />
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
