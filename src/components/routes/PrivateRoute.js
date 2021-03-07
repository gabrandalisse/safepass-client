import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/authentication/authContext';

const PrivateRoute = ({ component: Component, ...props }) => {
    const authContext = useContext(AuthContext);
    const { authenticated, getUser } = authContext;

    useEffect(() => {
        getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (  
        <Route { ...props } render={ props => !authenticated  ? (
            <Redirect to="/" />
        ) : (
            <Component {...props} />
        )} 
        />
    );
}

export default PrivateRoute;