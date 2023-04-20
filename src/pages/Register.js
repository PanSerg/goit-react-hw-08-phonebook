import { RegisterForm } from "components/RegisterForm/RegisterForm";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Register = () => {
  return (
    <Box
      sx={{
        display: { xs: 'flex' },
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Divider sx={{ width: 1, pt: 2, pb: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          <h2>Registration</h2>
        </Typography>
      </Divider>
      <RegisterForm />
      <Divider sx={{ width: 1, pt: 2, pb: 1 }} />
    </Box>
  );
};

export default Register;
