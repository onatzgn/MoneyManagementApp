import {UserSignUpType} from '@utils/types/UserSignUpType';
import {UserSignInType} from '@utils/types/UserSignInType';
import {
  ADDEXPENSESSUCCESS,
  ADDEXPENSESFAILURE,
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  UPDATEBUDGETFAILURE,
  UPDATEBUDGETSUCCESS,
  LOGOUT,
  SETONBOARDINGSEEN,
} from '../types/User.types';

export interface ExpenseListType {
  id: string;
  category: string;
  amount: number;
}
export interface UserState {
  signUp: UserSignUpType;
  signIn: UserSignInType;
  isLoggedIn: boolean;
  error: string;
  expenses: ExpenseListType[];
  budget: string;
  hasSeenOnboarding: boolean;
}
const initialState: UserState = {
  signUp: {fullName: '', email: '', password: '', phone: ''},
  signIn: {email: '', password: ''},
  expenses: [],
  budget: '',
  isLoggedIn: false,
  error: '',
  hasSeenOnboarding: false,
};
const userReducer = (
  state = initialState,
  action: {type: string; payload?: any},
): UserState => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signUp: action.payload,
        error: '',
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        signIn: action.payload,
        isLoggedIn: true,
        error: '',
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    case UPDATEBUDGETSUCCESS:
      return {
        ...state,
        budget: action.payload,
      };
    case UPDATEBUDGETFAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case ADDEXPENSESSUCCESS:
      return {
        ...state,
        expenses: action.payload as ExpenseListType[],
      };
    case ADDEXPENSESFAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case SETONBOARDINGSEEN:
      return {
        ...state,
        hasSeenOnboarding: true,
      };

    default:
      return state;
  }
};
export default userReducer;
