import {InitialState, ThemeState, TOGGLE_THEME} from '../types/theme.types';

const themeReducer = (
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
export default themeReducer;
