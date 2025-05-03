import './App.css';
import CustomLayout from './components/customLayout';
import { HeroUIProvider } from '@heroui/react';
import { LanguageProvider } from './contexts/language';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <HeroUIProvider>
        <LanguageProvider>
          <CustomLayout />
        </LanguageProvider>
      </HeroUIProvider>
    </Router>
  );
}

export default App;
