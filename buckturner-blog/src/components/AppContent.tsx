import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { BlogPost } from '../pages/BlogPost';
import { useScrollToTop } from '../hooks/use-scroll-to-top';

export const AppContent: React.FC = () => {
  // Scroll to top on route changes
  useScrollToTop();

  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/story/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
