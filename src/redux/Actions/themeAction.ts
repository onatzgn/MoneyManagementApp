import {TOGGLE_THEME} from '../types/theme.types';

export const ToggleTheme = (theme: 'light' | 'dark') => ({
  type: TOGGLE_THEME,
  payload: theme,
});
