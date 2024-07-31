import axios from 'axios';
import {UserSignUpType} from '@utils/types/UserSignUpType';
import {AppDispatch} from '../Store';
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  UPDATEBUDGETSUCCESS,
  UPDATEBUDGETFAILURE,
} from '../types/User.types';
import {UserSignInType} from '@utils/types/UserSignInType';
import {Platform} from 'react-native';

const baseUrl = () => {
  console.log('os', Platform.OS);
  if (Platform.OS === 'android') {
    return 'http://10.0.2.2:4000';
  }
  return 'http://localhost:4000';
};
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
//Budgets Actions
export const updateBudgetSuccess = (budget: number) => ({
  type: UPDATEBUDGETSUCCESS,
  payload: budget,
});
export const updateBudgetFailure = (error: any) => ({
  type: UPDATEBUDGETFAILURE,
  payload: error,
});

export const addInCome =
  (userId: string | undefined, amount: number) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`${baseUrl()}/users/${userId}`);
      const user = response.data;
      const updatedBudget = user.budget + amount;
      await axios
        .patch(`${baseUrl()}/users/${userId}`, {
          budget: updatedBudget,
        })
        .then(response => console.log(response));

      dispatch({type: UPDATEBUDGETSUCCESS, payload: updatedBudget});
    } catch (error) {
      dispatch(updateBudgetFailure(error));
    }
  };
export const signUpUser =
  (newUser: UserSignUpType) => async (dispatch: AppDispatch) => {
    try {
      axios
        .post(`${baseUrl()}/users`, newUser)
        .then(response => console.log(response));
      dispatch({type: SIGNUP_SUCCESS, payload: newUser});
    } catch (error) {
      dispatch({type: SIGNUP_FAILURE, payload: error});
    }
  };
export const signInUser = (user: UserSignInType) => {
  return async (dispatch: AppDispatch) => {
    {
      try {
        console.log('user: ', user);
        axios
          .get(`${baseUrl()}/users`)
          .then(response => {
            const users = response.data;
            const currentUser = users.find(
              (u: UserSignInType) =>
                u.email === user.email && u.password === user.password,
            );
            if (currentUser) {
              dispatch(signInSuccess(currentUser));
            } else {
              dispatch(signInFailure('Kullanıcı bulunamadı.'));
            }
            console.log('currentuser: ', currentUser);
          })
          .catch(reason => {
            dispatch({type: SIGNIN_FAILURE, payload: reason});
            console.log('reason: ', reason);
          });
      } catch (error) {
        console.log('catch: ', error);
      }
    }
  };
};
