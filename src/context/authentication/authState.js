import React, { useReducer } from 'react';
import axiosClient from '../../config/axios';
import authReducer from './authReducer';
import authContext from './authContext';
import tokenAuth from '../../config/token';
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
        message: null,
        loading: true
    };

    const [ state, dispatch ] = useReducer(authReducer, initialState);

    //* Register a new user
    const newUser = async userData => {
        try {
            const response = await axiosClient.post('/api/users', userData);
            console.log(response);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data
            });

            // Get the user info
            getUser();
        } catch (error) {
            console.log(error);
            dispatch({
                type: REGISTER_FAILED,
                payload: error.response.data.msg
            });
        }
    };

    //* Log in
    const logIn = async userData => {
        try {
            const response = await axiosClient.post('/api/auth', userData);
            
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            });

            // Put all data user on the state
            getUser();

        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            });
        }
    };

    //* Log out
    const logOut = () => {
        dispatch({
            type: LOG_OUT
        });
    };

    //* Get user info
    const getUser = async () => {
        const token = localStorage.getItem('token');

        if( token ) {
            tokenAuth(token);
        }

        try {
            const response = await axiosClient.get('/api/auth');

            dispatch({
                type: GET_USER,
                payload: response.data.user
            });

        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    return (  
        <authContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                loading: state.loading,
                newUser,
                logIn,
                logOut,
                getUser
            }}
        >
            {props.children}
        </authContext.Provider>
    );
}
 
export default AuthState;