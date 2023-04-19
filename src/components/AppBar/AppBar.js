import { useAuth } from "hooks";
import Box from '@mui/material/Box';
import { LinkStyled } from '../LinkStyled';
import Typography from '@mui/material/Typography';

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
      <Box
        component="nav"
        sx={{ flexGrow: 1, flexWrap: 'wrap', display: { xs: 'flex' } }}
      >
        <LinkStyled to="/">
          <Typography variant="h6" sx={{ mr: 1 }}>
            Phonebook
          </Typography>
        </LinkStyled>
        {isLoggedIn && (
          <LinkStyled to="/contacts">
            <Typography variant="h6">Contacts</Typography>
          </LinkStyled>
        )}
      </Box>
    );
};