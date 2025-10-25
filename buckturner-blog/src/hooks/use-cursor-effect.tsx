import { useEffect } from 'react';

export const useCursorEffect = () => {
  useEffect(() => {
    let clickTimeout: NodeJS.Timeout;

    const handleMouseDown = () => {
      document.body.classList.add('cursor-clicking');
    };

    const handleMouseUp = () => {
      // Keep the click state briefly for better visual feedback
      clickTimeout = setTimeout(() => {
        document.body.classList.remove('cursor-clicking');
      }, 100);
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      if (clickTimeout) {
        clearTimeout(clickTimeout);
      }
    };
  }, []);
};
