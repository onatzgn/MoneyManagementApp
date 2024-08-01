import {TOGGLE_THEME} from '../types/Theme.types';

export const ToggleTheme = (theme: 'light' | 'dark') => ({
  type: TOGGLE_THEME,
  payload: theme,
});
