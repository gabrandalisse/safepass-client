/* eslint-disable import/no-anonymous-default-export */
import {
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_ERROR,
    GET_ALL_SUCCESS,
    GET_ALL_ERROR
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case NEW_PASSWORD_SUCCESS:
            return {
                ...state,
                passwords: [...state.passwords, action.payload.data.pass]
            }

        case GET_ALL_SUCCESS:
            return {
                ...state,
                passwords: action.payload.data.passwords
            }

        case GET_ALL_ERROR:
        case NEW_PASSWORD_ERROR:
            return {
                ...state,
                message: action.payload,
            }
      
        default:
            return state;
    }
}