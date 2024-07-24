import {UserSignUpType} from '@utils/types/UserSignUpType';
import {
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from '../types/User.types';

import {UserSignInType} from '@utils/types/UserSignInType';
export interface UserSignUpState {
  signUp: UserSignUpType;
  signIn: UserSignInType;
  isLoggedIn: boolean;
  error: string;
}

const initialState: UserSignUpState = {
  signUp: {fullName: '', email: '', password: '', phone: ''},
  signIn: {email: '', password: ''},
  isLoggedIn: false,
  error: '',
};

const userReducer = (
  state = initialState,
  action: {type: string; payload?: any},
): UserSignUpState => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {...state, signUp: action.payload, error: ''};
    case SIGNUP_FAILURE:
      return {...state, error: action.payload};
    case SIGNIN_SUCCESS:
      return {...state, signIn: action.payload, isLoggedIn: true, error: ''};
    case SIGNIN_FAILURE:
      return {...state, error: action.payload};
    default:
      return state;
  }
};
export default userReducer;
