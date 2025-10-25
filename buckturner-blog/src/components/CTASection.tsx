import React from 'react';
import { ExternalLink, Key, Info } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <div className="cta-container">
      <div className="cta-section">
        <div className="cta-image-wrapper">
          <img src="/cta-vault.gif" alt="The Vault Pattaya" className="cta-image" />
        </div>
        
        <div className="cta-content">
          <p className="cta-intro">Mate, just wait...</p>
          
          <p className="cta-main">
            I just dropped <strong>The Vault Pattaya</strong>.
          </p>
          
          <p className="cta-description">
            Built it because I wish I had this on my first trip.. Basically the only tool you need for your first or next Pattaya Trip. Period.
          </p>
          
          <p className="cta-description">
            Interactive maps. Bar tracking. Live girl prices. Verified reviews. Best Guides EVER. Newbie Toolkit. POV videos. Live chat. Livestreams.
          </p>
          
          <p className="cta-description">
            And yes, it includes the ultimate Pattaya girls database: <strong>The VIP Pattaya Girls Index 2.0</strong>.
          </p>
          
          <a 
            href="https://buckturner.sell.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button cta-button-primary"
          >
            <span>Grab your key</span>
            <Key size={18} />
          </a>
          
          <a 
            href="https://thevault.typedream.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button cta-button-info"
          >
            <Info size={16} />
            <span>What is The Vault Pattaya ?</span>
          </a>
          
          <a 
            href="https://thevault-vippattayagirlsindex.typedream.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button cta-button-info"
          >
            <Info size={16} />
            <span>What is The VIP Pattaya Girls Index 2.0 ?</span>
          </a>
        </div>
      </div>
    </div>
  );
};
