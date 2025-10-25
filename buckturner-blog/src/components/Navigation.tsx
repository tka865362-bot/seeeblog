import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { WindowFrame } from './WindowFrame';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, Folder } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="navigation">
        <WindowFrame showExeTitle={true} exeTitle="pattaya.exe">
          <div className="nav-content">
            <Link to="/" className="nav-logo">
              <span className="nav-logo-text">buckturner.files</span>
            </Link>
            
            <div className="nav-links-desktop">
              {navLinks.map(link => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
              <a 
                href="https://mylifeinpattaya.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="vault-button"
              >
                <Folder size={16} strokeWidth={2} />
                The Vault Pattaya
              </a>
            </div>

            <div className="nav-right">
              <ThemeToggle />
              <button 
                className="mobile-menu-button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </WindowFrame>
      </nav>

      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <WindowFrame title="Menu">
            <div className="mobile-menu-links">
              {navLinks.map(link => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a 
                href="https://mylifeinpattaya.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="vault-button-mobile"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Folder size={20} strokeWidth={2} />
                The Vault Pattaya
              </a>
            </div>
          </WindowFrame>
        </div>
      )}
    </>
  );
};
