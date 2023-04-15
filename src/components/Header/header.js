import { Suspense } from "react";

const { NavLink, Outlet } = require("react-router-dom");

export const Header = () => {
    return (
        <header>
            <NavLink to='/'>Home Page</NavLink>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/login'>Log In</NavLink>

            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </header>
    );
};