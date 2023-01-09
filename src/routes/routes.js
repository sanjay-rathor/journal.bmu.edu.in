import React from 'react';
import { Switch} from 'react-router-dom';
import Login from '../views/main/login';
import CreateAccount from '../views/main/createAccount';
import RouteWithLayout from './routeWithLayout';
import MainLayout from './mainLayout';
import Logout from '../views/main/logout';
import Landing from '../views/main/landing';
import Home from '../views/home/home';
import {authenticationService} from '../services';


const PrivateRoute =  ({  component, layout, isAuth, ...options }) => {
  let u =  () => {
    let {component, layout, ...rest} = options;
    return <RouteWithLayout
        component={Landing}
        layout={MainLayout}
      />
}
return u();
};
const Routes = () => {
   return (
      <Switch>
        <PrivateRoute isAuth={true}  layout={MainLayout} component={Home}  
          exact auth={true}
          path={"*"} />
          {/* <PrivateRoute isAuth={true}  layout={MainLayout} component={Home}  
          exact auth={true}
          path={"/collections"} />
           <PrivateRoute isAuth={true}  layout={MainLayout} component={Home}  
          exact auth={true}
          path={"/open-access-articles"} />
           <PrivateRoute isAuth={true}  layout={MainLayout} component={Home}  
          exact auth={true}
          path={"/most-citied-articles"} />
          <PrivateRoute  component={Login} layout={MainLayout}   
          path={"/login"} />
           <PrivateRoute   component={CreateAccount}  layout={MainLayout}
          path={"/create-account"} />
          <PrivateRoute  isAuth={true}  component={UserListing}  layout={MainLayout}
          path={"/user-manage"} />
           <PrivateRoute  component={Logout} layout={MainLayout}   
          path={"/logout"} /> */}
     </Switch>   
     )
};  
export default Routes;