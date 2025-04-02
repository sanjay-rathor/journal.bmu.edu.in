import React from 'react';
import { Route } from "react-router-dom";
// import LoginForm from '../container/LoginForm';
// import RegistrationForm from '../container/RegistrationForm';
// import ForgotPasswordForm from '../container/ForgotPasswordForm';

const PrivateRoutes = ({match}) => (
<div>
  {/* <Route
   path={`${match.path}forgot-password`}
   component={ForgotPasswordForm} 
  />
  <Route
   path={`${match.path}register`} 
   component={RegistrationForm} 
  />
  <Route 
   path={`${match.path}`}
   exact component={LoginForm} 
  /> */}
</div>
);

export default PrivateRoutes;