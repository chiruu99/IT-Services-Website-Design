import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Toaster } from './components/ui/sonner';
import { NavigationHeader } from './components/NavigationHeader';
import { NavigationFooter } from './components/NavigationFooter';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Simple routing simulation without react-router-dom
  const navigate = (page: string) => {
    setCurrentPage(page);
    window.history.pushState({}, '', `/${page === 'home' ? '' : page}`);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/' || path === '') {
        setCurrentPage('home');
      } else {
        setCurrentPage(path.slice(1));
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Set initial page based on URL
    handlePopState();

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Toast Notifications */}
      <Toaster position="top-right" richColors />
      
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Header with navigation */}
      <NavigationHeader currentPage={currentPage} navigate={navigate} />
      
      {/* Main Content */}
      <main className="relative z-10">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderPage()}
        </motion.div>
      </main>
      
      {/* Footer */}
      <NavigationFooter navigate={navigate} />
    </div>
  );
}