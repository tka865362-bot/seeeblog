import React from 'react';

interface WindowFrameProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  showExeTitle?: boolean;
  exeTitle?: string;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({ children, title, className = '', showExeTitle = false, exeTitle = 'buck.exe' }) => {
  return (
    <div className={`window-frame ${className}`}>
      <div className="window-titlebar">
        <div className="window-controls">
          <span className="control-dot control-red"></span>
          <span className="control-dot control-yellow"></span>
          <span className="control-dot control-green"></span>
        </div>
        {showExeTitle && <span className="window-exe-title">{exeTitle}</span>}
        {title && <span className="window-title">{title}</span>}
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  );
};
