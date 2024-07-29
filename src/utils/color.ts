export interface ColorTypes {
  background: string;
  containerBackground: string;
  titleGreen: string;
  titleDefault: string;
  signInUpButton: string;
  signInUpButtonTextColor: string;
  placeholder: string;
  warning: string;
  profileBackground: string;
  profilePanel: string;
  profileButton: string;
  profileTitle: string;
  profileContainer: string;
  profileIcon: string;
  budgetTitle: string;
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
  profileBackground: '#EFEFEF',
  profilePanel: '#62E4C6',
  profileButton: 'white',
  profileTitle: 'white',
  profileContainer: 'white',
  profileIcon: 'black',
  budgetTitle: '#3CD598',
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
  profileBackground: '#27282E',
  profilePanel: '#3A8A77',
  profileButton: '#404040',
  profileTitle: 'white',
  profileContainer: '#404040',
  profileIcon: 'white',
  budgetTitle: '#3CD598',
};

const themes = {
  light: {...LightTheme},
  dark: {...DarkTheme},
};

export const getThemeColor = (theme: 'light' | 'dark' = 'light') => {
  const themeMode = themes[theme];
  return themeMode;
};
