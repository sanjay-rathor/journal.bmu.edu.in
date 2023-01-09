import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from '../views/main/login';
import MainLayout from '../routes/mainLayout';
const RouteWithLayout = props => {

  const {  component: Component,layout: Layout,authenticationService, auth: isAuth, ...rest } = props;
  if (!isAuth) {
    return (
      <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
    );
  } else {
    return <Route
    component={Login} layout={MainLayout}   
    path={"/login"}/>
  }
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default RouteWithLayout;
