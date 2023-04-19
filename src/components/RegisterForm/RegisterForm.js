import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { register } from 'redux/auth/auth-operations';

export function RegisterForm() {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(register(values));
          resetForm();
        }}
      >
        <Form>
          <label>
            User name:
            <Field type="text"
              name="name"
              placeholder="Enter user name"
            />
          </label>
          <ErrorMessage name="name" component="span"></ErrorMessage>

          <label>
            Email:
            <Field
              type="email"
              name="email"
              placeholder="Enter email"
            />
          </label>
          <ErrorMessage name="email" component="span"></ErrorMessage>

          <label>
            Password:
            <Field
              type="password"
              name="password"
              placeholder="Enter password"
            />
          </label>
          <ErrorMessage name="password" component="span"></ErrorMessage>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}