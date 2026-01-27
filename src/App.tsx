import './App.css';
import CustomLayout from './components/customLayout';
import { LanguageProvider } from './contexts/language';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <CustomLayout />
      </LanguageProvider>
    </Router>
  );
}

export default App;
