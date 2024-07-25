export interface ColorTypes {
  background: string;
  containerBackground: string;
  titleGreen: string;
  titleDefault: string;
  signInUpButton: string;
  signInUpButtonTextColor: string;
  placeholder: string;
  warning: string;
}

export const LightTheme: ColorTypes = {
  background: '#EFEFEF',
  containerBackground: '#FFFFFF',
  titleGreen: '#89E3B5',
  titleDefault: 'black',
  signInUpButton: 'black',
  signInUpButtonTextColor: 'white',
  placeholder: 'gray',
  warning: 'orange',
};

export const DarkTheme: ColorTypes = {
  background: '#27282E',
  containerBackground: '#404040',
  titleGreen: '#89E3B5',
  titleDefault: 'white',
  signInUpButton: 'white',
  signInUpButtonTextColor: 'black',
  placeholder: 'white',
  warning: 'orange',
};

const themes = {
  light: {...LightTheme},
  dark: {...DarkTheme},
};

export const getThemeColor = (theme: 'light' | 'dark' = 'light') => {
  const themeMode = themes[theme];
  return themeMode;
};
