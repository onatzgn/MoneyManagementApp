import { initialState, SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, UserSignUpState } from "../types/user.types"

const userReducer = (state = initialState, action: {type: string, payload?: any}): UserSignUpState => {
    switch(action.type){
        case SIGNUP_REQUEST:
            return {...state}
        case SIGNUP_SUCCESS:
            return {...state, signUp:action.payload, error:''}
        case SIGNUP_FAILURE:
            return {...state, error: action.payload}
        case SIGNIN_REQUEST:
            return {...state}
        case SIGNIN_SUCCESS:
            return {...state, signIn:action.payload, isLoggedIn:true, error:''}
        case SIGNIN_FAILURE:
            return {...state, error: action.payload}
        default:
            return state;
    }
}
export default userReducer