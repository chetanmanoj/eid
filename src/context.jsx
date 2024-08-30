// src/context.js
import  { createContext, useState } from 'react';

// Create the ThemeContext and LanguageContext
export const ThemeContext = createContext();
export const AudioContext = createContext();
export const LanguageContext = createContext();

// Create the provider component
export const AppProvider = ({ children }) => {
  // State for theme, default is 'light'
  const [theme, setTheme] = useState('light');

  // State for audio, default is 'on'
  const [audio, setAudio] = useState(true);

  // State for language, default is 'en'
  const [language, setLanguage] = useState('ar');

  // Function to toggle theme between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleAudio = () => {
    setAudio(!audio)
  }

  // Function to switch language between 'en' (English) and 'es' (Spanish)
  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AudioContext.Provider value={{ audio, toggleAudio }}>
        <LanguageContext.Provider value={{ language, switchLanguage }}>
          {children}
        </LanguageContext.Provider>
      </AudioContext.Provider>
    </ThemeContext.Provider>
  );
};
