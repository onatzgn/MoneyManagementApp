import {UserSignUpType} from '@utils/types/UserSignUpType';
import {UserSignInType} from '@utils/types/UserSignInType';
import {
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  UPDATEBUDGETFAILURE,
  UPDATEBUDGETSUCCESS,
} from '../types/User.types';

export interface ExpenseListType {
  category: string;
  amount: number;
  date: string;
}
export interface UserSignUpState {
  signUp: UserSignUpType;
  signIn: UserSignInType;
  spend: ExpenseListType[];
  budget: string;
  isLoggedIn: boolean;
  error: string;
}

const initialState: UserSignUpState = {
  signUp: {fullName: '', email: '', password: '', phone: ''},
  signIn: {email: '', password: ''},
  spend: [],
  budget: '',
  isLoggedIn: false,
  error: '',
};

const userReducer = (
  state = initialState,
  action: {type: string; payload?: any},
): UserSignUpState => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signUp: action.payload,
        error: '',
      };
    case SIGNUP_FAILURE:
      return {...state, error: action.payload};
    case SIGNIN_SUCCESS:
      return {
        ...state,
        signIn: action.payload,
        isLoggedIn: true,
        error: '',
        spend: action.payload,
      };
    case SIGNIN_FAILURE:
      return {...state, error: action.payload};
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
    default:
      return state;
  }
};
export default userReducer;
