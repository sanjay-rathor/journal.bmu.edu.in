import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authenticationService } from '../services';


 const PublicRoute = ({ component: Component, roles, ...rest }) => (
    <Route {...rest} render={props => {
        console.log("In Public ", rest,props);
        const currentUser = authenticationService.currentUserValue;
        console.log("User in Publiuc ", currentUser);
        if (currentUser != null) {
            // not logged in so redirect to login page with the return url
            // return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            return  <Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />
        } 
        return <Component {...props} />
    }} />
)

export default PublicRoute;