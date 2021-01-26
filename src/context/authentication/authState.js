import React, { useReducer } from 'react';
import axiosClient from '../../config/axios';
import authReducer from './authReducer';
import authContext from './authContext';
import {
    GET_USER,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOG_OUT,
    REGISTER_FAILED,
    REGISTER_SUCCESS
} from '../../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null 
    };

    const [ state, dispatch ] = useReducer(authReducer, initialState);

    //* Register a new user
    const newUser = async userData => {
        try {
            const response = await axiosClient.post('/api/users', userData);
            console.log(response);

            dispatch({
                type: REGISTER_SUCCESS
            });

        } catch (error) {
            console.log(error);

            dispatch({
                type: REGISTER_FAILED
            });
        }
    };

    return (  
        <authContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                newUser
            }}
        >
            {props.children}
        </authContext.Provider>
    );
}
 
export default AuthState;