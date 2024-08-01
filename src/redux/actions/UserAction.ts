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
  ADDEXPENSESSUCCESS,
  ADDEXPENSESFAILURE,
  LOGOUT,
  SETONBOARDINGSEEN,
} from '../types/User.types';
import {UserSignInType} from '@utils/types/UserSignInType';
import {Alert, Platform} from 'react-native';
import {ExpenseListType} from '@redux/reducers/UserReducer';

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
export const logOut = () => ({
  type: LOGOUT
})
export const setOnboardingSeen = () => ({
  type: SETONBOARDINGSEEN,
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
export const addExpensesSuccess = (expenses: ExpenseListType[]) => ({
  type: ADDEXPENSESSUCCESS,
  payload: expenses,
});
export const addExpensesFailure = (error: any) => ({
  type: ADDEXPENSESFAILURE,
  payload: error,
});

export const addInCome =
  (userId: string | undefined, amount: number) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`${baseUrl()}/users/${userId}`);
      const user = response.data;
      const updatedBudget = user.budget + amount;
      await axios.patch(`${baseUrl()}/users/${userId}`, {
        budget: updatedBudget,
      });

      dispatch({type: UPDATEBUDGETSUCCESS, payload: updatedBudget});
      dispatch({type: ADDEXPENSESSUCCESS, payload: user.expenses});
    } catch (error) {
      dispatch(updateBudgetFailure(error));
    }
  };
export const addExpense =
  (userId: string | undefined, amount: number, category: string) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`${baseUrl()}/users/${userId}`);
      const user = response.data;
      const currentExtenses: ExpenseListType[] = user.expenses;
      const updatedBudget = user.budget - amount;
      if (updatedBudget < 0) {
        Alert.alert('Hata', 'Bütçe eksiye düşemez');
        return;
      }
      await axios.patch(`${baseUrl()}/users/${userId}`, {
        budget: updatedBudget,
      });
      console.log(currentExtenses);
      const max =
        Math.max(...currentExtenses.map(x => parseInt(x.id, 10)), 0) + 1;
      console.log('1', max);

      const expense = {amount, category, id: max.toString()};
      const newExpenses = [...currentExtenses, expense];
      await axios.patch(`${baseUrl()}/users/${userId}`, {
        expenses: newExpenses,
      });

      dispatch({type: UPDATEBUDGETSUCCESS, payload: updatedBudget});
      dispatch({type: ADDEXPENSESSUCCESS, payload: newExpenses});
    } catch (error) {}
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
              dispatch(signUpSuccess(currentUser));
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
