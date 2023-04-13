import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
    const dispatch = useDispatch();

    return (
      <div>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values, { resetForm }) => {
            dispatch(logIn(values));
            resetForm();
          }}
        >
          <Form>
            <label htmFor="email">Email:</label>
                <Field
                    type="email"
                    name="email"
                    placeholder="Enter email"
                />
                <ErrorMessage name="email" component="span"></ErrorMessage>

            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              name="password"
              placeholder="Enter password"
            />
                <ErrorMessage name="password" component="span"></ErrorMessage>
                    
            <button type="submit">Register</button>
          </Form>
        </Formik>
      </div>
    );
}
