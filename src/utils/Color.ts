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
  tabBar: string;
  iconContainer: string;
  onBoardingBackground: string;
  onBoardingContainer: string;
  onBoardingTextContainer: string;
  onBoardingText: string;
  onBoardingSkip: string;
  gray: string;
  activeBackgroundColor: string;
  inActiveBackgroundColor: string;
  borderActiveColor: string;
  borderInActiveColor: string;
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
  tabBar: '#FFFFFF',
  iconContainer: '#CEF4E5',
  onBoardingBackground: '#FFBD12',
  onBoardingContainer: '#FFFFFF',
  onBoardingTextContainer: '#00C6AE',
  onBoardingText: 'black',
  onBoardingSkip: '#474A57',
  gray: 'gray',
  activeBackgroundColor: '#9ee3fb',
  inActiveBackgroundColor: '#3c4145',
  borderActiveColor: '#86c3d7',
  borderInActiveColor: '#1c1c1c',
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
  tabBar: '#18191F',
  iconContainer: '#1E3732',
  onBoardingBackground: '#27282E',
  onBoardingContainer: '#404040',
  onBoardingTextContainer: '#638074',
  onBoardingText: '#292929',
  onBoardingSkip: '#ACACAC',
  gray: 'gray',
  activeBackgroundColor: '#9ee3fb',
  inActiveBackgroundColor: '#3c4145',
  borderActiveColor: '#86c3d7',
  borderInActiveColor: '#1c1c1c',
};

const themes = {
  light: {...LightTheme},
  dark: {...DarkTheme},
};

export const getThemeColor = (theme: 'light' | 'dark' = 'light') => {
  const themeMode = themes[theme];
  return themeMode;
};
