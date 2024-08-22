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
  ADDWISHLISTSUCCESS,
  ADDWISHLISTFAILURE,
  DELETEWISHLISTSUCCESS,
  DELETEWISHLISTFAILURE,
  UPDATEWISHLISTSUCCESS,
  SETEXPENSEADDED,
  UPDATESCORE,
  RESETSTORE,
  UPDATEEXPENSEADDED,
  WISHLISTCOMPLETED,
} from '../types/User.types';
import { Wishlist } from '@components';

export interface ExpenseListType {
  id: string;
  category: string;
  amount: number;
}
export interface WishListType {
  id: number;
  title: string;
  dailyGoal: number;
  totalAmount: number;
  startDate: string;
  endDate: string;
  progress: number;
}
export interface UserState {
  signUp: UserSignUpType;
  signIn: UserSignInType;
  isLoggedIn: boolean;
  error: string;
  expenses: ExpenseListType[];
  wishlists: WishListType[];
  budget: number;
  hasSeenOnboarding: boolean;
  idCounter: number;
  hasExpenseAdded: number;
  score: number;
  wishlistCompleted: boolean;
}
const initialState: UserState = {
  signUp: {fullName: '', email: '', password: '', phone: ''},
  signIn: {email: '', password: ''},
  expenses: [],
  wishlists: [],
  budget: 0,
  isLoggedIn: false,
  error: '',
  hasSeenOnboarding: false,
  idCounter: 1,
  hasExpenseAdded: 0,
  score: 0,
  wishlistCompleted: false,
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
    case ADDWISHLISTSUCCESS:
      return {
        ...state,
        wishlists: action.payload as WishListType[],
        idCounter: state.idCounter + 1,
      };
    case ADDWISHLISTFAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case DELETEWISHLISTSUCCESS:
      return{
        ...state,
        wishlists: state.wishlists.filter(
          wishListItem => wishListItem.id !== action.payload
        ),
      };
    case DELETEWISHLISTFAILURE:
      return{
        ...state,
        error: action.payload,
      };
      case UPDATEWISHLISTSUCCESS:
        return {
          ...state,
          wishlists: state.wishlists.map(wishlist =>
            wishlist.id === action.payload.id
              ? { ...wishlist, progress: action.payload.progress }
              : wishlist
          ),
        };
      
    case SETONBOARDINGSEEN:
      return {
        ...state,
        hasSeenOnboarding: true,
      };
    case SETEXPENSEADDED:
      return {
        ...state,
        hasExpenseAdded: state.hasExpenseAdded + 1,
      };
    case UPDATEEXPENSEADDED:
      return {
        ...state,
        hasExpenseAdded: action.payload,
      };
    case UPDATESCORE:
      return {
        ...state,
        score: action.payload,
      };
    case WISHLISTCOMPLETED:
      return {
        ...state,
        wishlistCompleted: true,
      };

    case RESETSTORE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
export default userReducer;
