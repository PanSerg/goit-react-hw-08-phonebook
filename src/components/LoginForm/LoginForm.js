import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { logIn } from 'redux/auth/auth-operations';
import * as Yup from 'yup';

import Box from '@mui/material/Box';
import { TextField } from 'formik-mui';
import Button from '@mui/material/Button';

const SubmitSchema = Yup.object().shape({
  name: Yup.string().required('Enter contact name'),
  email: Yup.string().nullable().email().required('Enter email'),
  password: Yup.string()
    .min(8 | 'Password must be at least 8 characters long')
    .max(
      16 | 'The maximum length of the password must not exceed 16 characters'
    )
    .required('Enter password'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SubmitSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(logIn(values));
          resetForm();
        }}
      >
        <Form>
          <Box marginY={1} sx={{ width: 350 }}>
            Email:
            <Field
              component={TextField}
              type="email"
              name="email"
              placeholder="Enter email"
              size="small"
              fullWidth
            />
          </Box>
          <ErrorMessage name="email" component="span"></ErrorMessage>

          <Box marginY={1} sx={{ width: 350 }}>
            Password:
            <Field
              component={TextField}
              type="password"
              name="password"
              placeholder="Enter password"
              size="small"
              fullWidth
            />
          </Box>
          <ErrorMessage name="password" component="span"></ErrorMessage>

          <Button variant="contained" type="submit">
            Register
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
