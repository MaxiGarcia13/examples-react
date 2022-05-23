import { useRef, useState, createContext } from 'react';

export const themes = {
  light: 'light',
  dark: 'dark',
  golden: 'golden',
};

const defaultTheme = themes.dark;

export const MyContext = createContext(defaultTheme);

export const ContextProvider = (props) => {
  const themeRef = useRef(null);
  const [theme, setTheme] = useState(defaultTheme);

  const handleSetTheme = (value) => {
    setTheme(themes[value] ?? defaultTheme);
  };

  return (
    <MyContext.Provider value={{ currentTheme: theme, setTheme: handleSetTheme }}>
      <div ref={themeRef} data-theme={theme}>
        {props.children}
      </div>
    </MyContext.Provider>
  );
};
