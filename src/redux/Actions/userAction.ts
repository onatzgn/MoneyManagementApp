import axios from 'axios';
import {UserSignUpType} from '@utils/types/UserSignUpType';
import {AppDispatch} from '../Store';
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
} from '../types/User.types';
import {UserSignInType} from '@utils/types/UserSignInType';
//Sign Up Actions
export const signUpSuccess = (user: UserSignUpType) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});
export const signUpFailure = (error: any) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});
//Sign In  Actions
export const signInSuccess = (currentUser: UserSignInType) => ({
  type: SIGNIN_SUCCESS,

  payload: currentUser,
});
export const signInFailure = (error: any) => ({
  type: SIGNIN_FAILURE,
  payload: error,
});

export const signUpUser =
  (newUser: UserSignUpType) => async (dispatch: AppDispatch) => {
    try {
      axios
        .post('http://10.0.2.2:3000/users', newUser)
        .then(response => console.log(response));
      dispatch({type: SIGNUP_SUCCESS, payload: newUser});
    } catch (error) {
      dispatch({type: SIGNUP_FAILURE, payload: error});
    }
  };
export const signInUser = (user: UserSignInType) => {
  return async (dispatch: AppDispatch) => {
    {
      axios
        .get('http://10.0.2.2:3000/users')
        .then(response => {
          const users = response.data;
          const currentUser = users.find(
            (u: UserSignInType) =>
              u.email === user.email && u.password === user.password,
          );
          dispatch(signInSuccess(currentUser));
        })
        .catch(reason => {
          dispatch({type: SIGNIN_FAILURE, payload: reason});
        });
    }
  };
};
