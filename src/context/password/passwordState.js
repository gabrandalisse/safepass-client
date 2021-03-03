import React, { useReducer } from 'react';
import passwordReducer from './passwordReducer';
import passwordContext from './passwordContext';
import axiosClient from '../../config/axios';
import {
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_ERROR,
    GET_ALL_SUCCESS,
    GET_ALL_ERROR,
    DELETE_SUCCES
} from '../../types';

const PasswordState = props => {
    const initialState = {
        passwords: [],
        message: null,
    }

    const [ state, dispatch ] = useReducer(passwordReducer, initialState);

    //* Add a new password
    const newPassword = async info => {
        try {
            const response = await axiosClient.post('/api/passwords/', info);
            
            dispatch({
                type: NEW_PASSWORD_SUCCESS,
                payload: response
            });

            getAll();
        } catch (error) {
            console.log(error);
            dispatch({
                type: NEW_PASSWORD_ERROR,
                payload: error
            });
        }
    };

    //* Get all passwords
    const getAll = async () => {
        try {
            const response = await axiosClient.get('/api/passwords/');
            dispatch({
                type: GET_ALL_SUCCESS,
                payload: response
            });

        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_ALL_ERROR,
                payload: error
            });
        }
    };

    //* Delete a password
    const deletePassword = async id => {
        try {
            const response = await axiosClient.delete(`/api/passwords/${id}`);
            dispatch({
                type: DELETE_SUCCES,
                payload: response.data.msg
            });

            getAll();
        } catch (error) {
            console.log(error);
        }
    }

    return (  
        <passwordContext.Provider
            value={{
                passwords: state.passwords,
                message: state.message,
                newPassword,
                getAll,
                deletePassword
            }}
        >
            {props.children}
        </passwordContext.Provider>
    );
}
 
export default PasswordState;