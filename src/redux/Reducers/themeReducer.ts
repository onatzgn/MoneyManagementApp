import {TOGGLE_THEME} from '../types/Theme.types';

export interface ThemeState {
  theme: 'light' | 'dark';
}
export const InitialState: ThemeState = {
  theme: 'light',
};

const ThemeReducer = (
  state = InitialState,
  action: {type: string; payload?: any},
): ThemeState => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {...state, theme: action.payload};
    default:
      return state;
  }
};
export default ThemeReducer;
