import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { CssBaseline } from '@mui/material';
import { Footer } from "components/Footer/footer";

export const Layout = () => {
    return (
      <>
        <CssBaseline />
      
        <NavLink to="/">Home Page</NavLink>
        <NavLink to={'/register'}>Register</NavLink>
        <NavLink to={'/login'}>Log In</NavLink>

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