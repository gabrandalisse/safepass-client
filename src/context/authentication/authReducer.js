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
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null
            }

        case REGISTER_FAILED:
            return {
                ...state,
                token: null,
                message: action.payload
            }
 
        default:
            return state;
    }
};