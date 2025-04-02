import React from "react";
import {useHistory} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import {authenticationService} from '../../services';
import { createBrowserHistory } from 'history';

const LoginPage = () => {
  const browserHistory = useHistory();
  const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const [submitting, setSubmitting] = React.useState(false);
  const [credentials , setCredentials] = React.useState({
    "email" : "",
    "password" : ""
  })
  const navigateToHome = () => {
    browserHistory.push("/");
    window.location.reload(); 
  }
  return (
    <div className="container">
      <div className="row mb-5">
      <div className="col-lg-6">
      </div>
        <div className="col-lg-6 text-center">
          <h1 className="mt-5">Login</h1>
        </div>
      </div>
      <div className="row">
      <div className="col-lg-6">
      </div>
        <div className="col-lg-6">
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={values => {
              let errors = {};
              let hasError = true;
              if (values.email === "") {
                errors.email = "Email is required";
              } else if (!emailTest.test(values.email)) {
                errors.email = "Invalid email address format";
              } else  {
                hasError = false;
              }
              if (values.password === "") {
                errors.password = "Password is required";
              } else if (values.password.length < 3) {
                errors.password = "Password must be 3 characters at minimum";
              } else {
                if (hasError == false) {
                  hasError = false;
                  setCredentials({
                    "email" : values.email,
                    "password" : values.password
                  });
                }
              }
              return errors;
            }}
            onSubmit={() => {
              authenticationService.login(credentials.email, credentials.password).then((response) => {
                console.log("User " , response);
               // setSubmitting(false);
                navigateToHome();
              }).catch((err) => {
                console.log("Error : " + err);
              });
             
            }}
          >
            {({ touched, errors, isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className={`form-control ${
                      touched.email && errors.email ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="invalid-feedback"
                  /> 
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className={`form-control ${
                      touched.password && errors.password ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="invalid-feedback"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Please wait..." : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
export default LoginPage; 