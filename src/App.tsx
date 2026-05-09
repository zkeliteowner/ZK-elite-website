/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Page title management
  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'Home | ZKElite — Your Vision Our Solutions',
      services: 'Our Services | ZKElite — Elevate Your Brand',
      team: 'Our Team | ZKElite — The Creative Minds',
      about: 'About Us | ZKElite — Our Story & Mission',
      contact: 'Contact Us | ZKElite — Let\'s Collaborate'
    };
    document.title = titles[currentPage] || 'ZKElite';
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setPage={setCurrentPage} />;
      case 'services': return <ServicesPage setPage={setCurrentPage} />;
      case 'team': return <TeamPage setPage={setCurrentPage} />;
      case 'about': return <AboutPage setPage={setCurrentPage} />;
      case 'contact': return <ContactPage setPage={setCurrentPage} />;
      default: return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-gold selection:text-black">
      <CustomCursor />
      <div className="grain-overlay" />
      
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      
      <main>
        {renderPage()}
      </main>

      <Footer setPage={setCurrentPage} />
    </div>
  );
}
