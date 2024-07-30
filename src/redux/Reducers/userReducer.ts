import {UserSignUpType} from '@utils/types/UserSignUpType';
import {UserSignInType} from '@utils/types/UserSignInType';
import {
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from '../types/User.types';

interface ExpenseType {
  spend: any;
  category: string;
  amount: number;
  date: string;
}
interface BudgetType {
  budget: number;
  expenses: ExpenseType[];
}
export interface UserSignUpState {
  signUp: UserSignUpType;
  signIn: UserSignInType;
  spend: BudgetType;
  isLoggedIn: boolean;
  error: string;
}

const initialState: UserSignUpState = {
  signUp: {fullName: '', email: '', password: '', phone: ''},
  signIn: {email: '', password: ''},
  spend: {budget: 0, expenses: []},
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
        spend: {
          budget: action.payload.budget || 0,
          expenses: action.payload.expenses || [],
        },
      };
    case SIGNIN_FAILURE:
      return {...state, error: action.payload};
    default:
      return state;
  }
};
export default userReducer;
