export const TOGGLE_THEME = 'TOGGLE_THEME';

export interface ToggleThemeActionType {
  type: typeof TOGGLE_THEME;
  payload: 'light' | 'dark';
}

export interface ThemeState {
  theme: 'light' | 'dark';
}

export const InitialState: ThemeState = {
  theme: 'light',
};
