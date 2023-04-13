import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { register } from 'redux/auth/operations';

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
          <label htmlFor="name">User name:</label>
          <Field type="text" name="name" placeholder="Enter user name" />
          <ErrorMessage name="name" component="span"></ErrorMessage>

          <label htmlFor="email">Email:</label>
          <Field type="email" name="email" placeholder="Enter email" />
          <ErrorMessage name="email" component="span"></ErrorMessage>

          <label htmlFor="password">Password:</label>
          <Field type="password" name="password" placeholder="Enter password" />
          <ErrorMessage name="password" component="span"></ErrorMessage>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}