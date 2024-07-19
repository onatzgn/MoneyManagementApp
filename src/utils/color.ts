import {ColorTypes} from './types/ColorType';

export const LightTheme: ColorTypes = {
  background: '#EFEFEF',
  containerBackground: '#FFFFFF',
  titleGreen: '#89E3B5',
  titleDefault: 'black',
};

export const DarkTheme: ColorTypes = {
  background: '#27282E',
  containerBackground: '#404040',
  titleGreen: '#89E3B5',
  titleDefault: 'white',
};

const themes = {
  light: {...LightTheme},
  dark: {...DarkTheme},
};

export const getThemeColor = (theme: 'light' | 'dark' = 'light') => {
  const themeMode = themes[theme];
  return themeMode;
};
