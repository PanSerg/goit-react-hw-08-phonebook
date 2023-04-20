import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { register } from 'redux/auth/auth-operations';
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
        validationSchema={SubmitSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(register(values));
          resetForm();
        }}
      >
        <Form autoComplete="off">
          User name:
          <Box marginY={1} sx={{ width: 350 }}>
            <Field
              component={TextField}
              type="text"
              name="name"
              placeholder="Enter user name"
              size="small"
              fullWidth
            />
          </Box>
          <ErrorMessage name="name" component="span"></ErrorMessage>
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