import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { CssBaseline } from '@mui/material';
import { Footer } from "components/Footer/footer";
import { useAuth } from 'hooks';
import { AppBar } from 'components/AppBar/AppBar';
import { AuthNav } from 'components/AuthNav/authNav';

export const Layout = () => {
 const { isLoggedIn } = useAuth();
//  console.log('isLoggedIn', isLoggedIn);

    return (
      <>
        <CssBaseline />
        {isLoggedIn ? <AppBar /> : <AuthNav />}
        
        {/* <NavLink to="/">Home Page</NavLink>
        <NavLink to={'/register'}>Register</NavLink>
        <NavLink to={'/login'}>Log In</NavLink> */}

        <Container
          maxWidth="sm"
          sx={{ minHeight: '100vh', pt: 9.5, mb: -9, pb: 4 }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
        <Footer />
      </>
    );
};