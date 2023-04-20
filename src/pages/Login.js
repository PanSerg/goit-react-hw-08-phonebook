import { LoginForm } from "components/LoginForm/LoginForm";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const Login = () => {
    return (
      <Box
        sx={{
          display: { xs: 'flex' },
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Divider sx={{ width: 1, pt: 2, pb: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}></Typography>
          <h2>Login</h2>
        </Divider>
        <LoginForm />
        <Divider sx={{ width: 1, pt: 2, pb: 1 }} />
      </Box>
    );
};

export default Login;