import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/auth-operations";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <Box component="div" sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6">Welcome, {user.name}</Typography>
            <Button type="button" onClick={() => dispatch(logOut())}>
                Logout
            </Button>
        </Box>
    );
};