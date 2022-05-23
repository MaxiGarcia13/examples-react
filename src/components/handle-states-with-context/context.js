import { useRef, useState } from 'react';

const themes = {
  light: 'light-theme',
  dark: 'dark-theme',
};

const defaultTheme = themes.dark;

export const MyContext = React.createContext(defaultTheme);

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

export const ContextConsumer = (props) => <MyContext.Consumer>{props.children}</MyContext.Consumer>;
