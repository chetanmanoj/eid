import  { createContext, useState } from 'react';

export const ThemeContext = createContext();
export const AudioContext = createContext();
export const LanguageContext = createContext();

export const AppProvider = ({ children }) => {
  // State for theme, default is 'light'
  const [theme, setTheme] = useState('light');

  // State for audio, default is 'on'
  const [audio, setAudio] = useState(true);

  // State for language, default is 'ar'
  const [language, setLanguage] = useState('ar');

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Function to toggle audio
  const toggleAudio = () => {
    setAudio(!audio)
  }

  // Function to switch language 
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
