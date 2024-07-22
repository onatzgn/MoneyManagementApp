import { UserSignInType } from "../../utils/types/UserSignInType";
import { UserSignUpType } from "../../utils/types/UserSignUpType";
//Sign Up Action Types
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
//Sign Up Reducer Types
export interface UserSignUpState{
    signUp: UserSignUpType,
    signIn: UserSignInType,
    isLoggedIn: boolean,
    error: string
}
export const initialState : UserSignUpState = {
    signUp: {fullName:'', email:'', password:'', phone:''},
    signIn: {email:'', password:''},
    isLoggedIn: false,
    error: ''
}
//Sign In Action Types
export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';
