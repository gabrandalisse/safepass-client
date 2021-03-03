import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/authentication/authContext';

const PrivateRoute = ({ component: Component, ...props }) => {
    const authContext = useContext(AuthContext);
    const { authenticated, loading, getUser } = authContext;

    useEffect(() => {
        getUser();
    }, [])

    return (  
        <Route { ...props } render={ props => !authenticated  ? (
            <Redirect to="/" />
        ) : (
            <Component {...props} />
        )} 
        />
    );
}

//TODO Ver que cuando cierro sesion no se redirige a login o pagina de inicio
//TODO creo que el error era el loading, ver eso bien o sacarlo de ultima! gg
 
export default PrivateRoute;