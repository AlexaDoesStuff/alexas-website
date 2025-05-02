import './App.css';
import CustomLayout from './components/customLayout';
import { HeroUIProvider } from '@heroui/react';
import { LanguageProvider } from './contexts/language';

function App() {
  return (
    <>
      <HeroUIProvider>
        <LanguageProvider>
          <CustomLayout />
        </LanguageProvider>
      </HeroUIProvider>
    </>
  );
}

export default App;
