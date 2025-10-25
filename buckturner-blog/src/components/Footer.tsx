import React from 'react';
import { WindowFrame } from './WindowFrame';
import { Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <WindowFrame>
        <div className="footer-content">
          <div className="footer-social">
            <a 
              href="https://x.com/buckturner555" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="Follow buckturner on Twitter"
            >
              <Twitter size={18} />
              <span>@buckturner555</span>
            </a>
            <span className="footer-divider">•</span>
            <a 
              href="https://x.com/vippattayagirls" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="Follow VIP Pattaya Girls Index on Twitter"
            >
              <Twitter size={18} />
              <span>@vippattayagirls</span>
            </a>
          </div>
          <div className="footer-copyright">
            <p>© 2025 buckturner. made with love. ♡ la vie est belle. :)</p>
          </div>
        </div>
      </WindowFrame>
    </footer>
  );
};
