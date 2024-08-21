import axios from 'axios';
import {UserSignUpType} from '@utils/types/UserSignUpType';
import {AppDispatch, RootState} from '../Store';
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
  ADDWISHLISTSUCCESS,
  ADDWISHLISTFAILURE,
  DELETEWISHLISTSUCCESS,
  DELETEWISHLISTFAILURE,
  UPDATEWISHLISTSUCCESS,
  SETEXPENSEADDED,
  UPDATESCORE,
  RESETSTORE,
  UPDATEEXPENSEADDED,
  WISHLISTCOMPLETED
} from '../types/User.types';
import {UserSignInType} from '@utils/types/UserSignInType';
import {Alert, Platform} from 'react-native';
import {ExpenseListType, WishListType} from '@redux/reducers/UserReducer';
import {useState} from 'react';

const baseUrl = () => {
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
//Logout Action
export const logOut = () => ({
  type: LOGOUT,
});
//On Boarding Action
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
//Expense Actions
export const addExpensesSuccess = (expenses: ExpenseListType[]) => ({
  type: ADDEXPENSESSUCCESS,
  payload: expenses,
});
export const addExpensesFailure = (error: any) => ({
  type: ADDEXPENSESFAILURE,
  payload: error,
});
export const addWishlistSuccess = (wishlists: WishListType[]) => ({
  type: ADDWISHLISTSUCCESS,
  payload: wishlists,
});
export const addWishlistFailure = (error: any) => ({
  type: ADDWISHLISTFAILURE,
  payload: error,
});
export const deleteWishlistSuccess = (id: number) => ({
  type: DELETEWISHLISTSUCCESS,
  payload: id,
});
export const deleteWishlistFailure = (error: any) => ({
  type: DELETEWISHLISTFAILURE,
  payload: error,
});
export const updateWishlistSuccess = (id: number, progress: number) => ({
  type: UPDATEWISHLISTSUCCESS,
  payload: {id, progress},
});
export const setExpenseAdded = () => ({
  type: SETEXPENSEADDED,
});
export const resetStore = () => ({
  type: RESETSTORE,
});
export const updateScoreSuccess = (score:number) => ({
  type: UPDATESCORE,
  payload: score,
});
export const updateExpenseAdded = (hasExpense:number) => ({
  type: UPDATEEXPENSEADDED,
  payload: hasExpense,
});
export const wishlistCompleted = () => ({
  type: WISHLISTCOMPLETED,
});
export const expenseAddMission = (userId: string| undefined) => async (dispatch: AppDispatch, getState: () => RootState) => {
  const { hasExpenseAdded } = getState().persistedReducer.user;

  try {
    await axios.patch(`${baseUrl()}/users/${userId}`, {
      hasExpenseAdded: hasExpenseAdded + 1,
    });
    dispatch(setExpenseAdded());
  } catch (error) {
    console.error('Error updating hasExpenseAdded in the database:', error);
  }
};

export const updateScore =
  (userId: string | undefined, score: number) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`${baseUrl()}/users/${userId}`);
      const user = response.data;
      const updateScore = user.score + score;
      await axios.patch(`${baseUrl()}/users/${userId}`, {
        score: updateScore,
      });
      dispatch({type: UPDATESCORE, payload: updateScore});
    } catch (error) {
    }
  };
export const addWishlist =
  (
    userId: string | undefined,
    id: number,
    title: string,
    dailyGoal: number,
    totalAmount: number,
    startDate: string,
    endDate: string,
  ) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    const {idCounter} = getState().persistedReducer.user;
    try {
      const response = await axios.get(`${baseUrl()}/users/${userId}`);

      const user = response.data;
      const currentWishlists: WishListType[] = user.wishlists;

      const wishlist = {
        id: idCounter,
        title,
        dailyGoal,
        totalAmount,
        startDate,
        endDate,
      };
      const newWishlist = [...currentWishlists, wishlist];

      await axios.patch(`${baseUrl()}/users/${userId}`, {
        wishlists: newWishlist,
      });

      dispatch({type: ADDWISHLISTSUCCESS, payload: newWishlist});
    } catch (error) {
      dispatch({type: ADDWISHLISTFAILURE, payload: error});
    }
  };

export const deleteWishlist =
  (userId: string | undefined, id: number) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`${baseUrl()}/users/${userId}`);
      const user = response.data;
      const currentWishlists: WishListType[] = user.wishlists;

      const updatedWishlists = currentWishlists.filter(
        wishlist => wishlist.id !== id,
      );

      await axios.patch(`${baseUrl()}/users/${userId}`, {
        wishlists: updatedWishlists,
      });

      dispatch({type: ADDWISHLISTSUCCESS, payload: updatedWishlists});
    } catch (error) {}
  };
export const updateWishlist =
  (
    userId: string | undefined,
    id: number,
    progress: number,
    dailyGoal: number,
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`${baseUrl()}/users/${userId}`);
      const user = response.data;
      const currentWishlists: WishListType[] = user.wishlists;

      const updatedWishlists = currentWishlists.map(wishlist =>
        wishlist.id === id ? {...wishlist, progress} : wishlist,
      );

      await axios.patch(`${baseUrl()}/users/${userId}`, {
        wishlists: updatedWishlists,
      });

      const updatedBudget = user.budget - dailyGoal;
      if (updatedBudget < 0) {
        Alert.alert('Hata', 'Bütçe eksiye düşemez');
        return;
      }
      await axios.patch(`${baseUrl()}/users/${userId}`, {
        budget: updatedBudget,
      });
      dispatch({type: UPDATEBUDGETSUCCESS, payload: updatedBudget});
      dispatch({type: UPDATEWISHLISTSUCCESS, payload: {id, progress}});
    } catch (error) {}
  };

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
      const max =
        Math.max(...currentExtenses.map(x => parseInt(x.id, 10)), 0) + 1;

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
          })
          .catch(reason => {
            dispatch({type: SIGNIN_FAILURE, payload: reason});
          });
      } catch (error) {
        dispatch({type: SIGNIN_FAILURE, payload: error});
      }
    }
  };
};
