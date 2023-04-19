import Box from '@mui/material/Box';
import { LinkStyled } from '../LinkStyled';
import Typography from '@mui/material/Typography';

export const AuthNav = () => {
    return (
        <Box component="nav" sx={{ flexWrap: 'wrap', display: { xs: 'flex' } }}>
            <LinkStyled to="/register">
                <Typography variant="h6" sx={{ mr: 1 }}>
                    Register
                </Typography>
            </LinkStyled>
            
            <LinkStyled to="/login">
                <Typography variant="h6" sx={{ mr: 1 }}>
                    LogIn
                </Typography>
            </LinkStyled>
        </Box>
    );
};