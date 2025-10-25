import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AppContent } from './components/AppContent';
import { useCursorEffect } from './hooks/use-cursor-effect';
import './App.css';

function App() {
  // Enable custom cursor effect
  useCursorEffect();

  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
