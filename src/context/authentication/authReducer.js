/* eslint-disable import/no-anonymous-default-export */
import {
   GET_USER,
   LOGIN_ERROR,
   LOGIN_SUCCESS,
   LOG_OUT,
   REGISTER_FAILED,
   REGISTER_SUCCESS
} from '../../types';

export default (state, action) => {
    switch (action.type) { 
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                token: action.payload.token,
                message: null,
                loading: false
            }

        case LOGIN_ERROR:
        case LOG_OUT: 
        case REGISTER_FAILED:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                authenticated: null,
                message: action.payload,
                loading: false
            }

        case GET_USER: {
            return {
                ...state,
                authenticated: true,
                user: action.payload,
                loading: false
            }
        }
 
        default:
            return state;
    }
};