import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import { LinkStyled } from '../LinkStyled';
import Typography from '@mui/material/Typography';
import { logOut } from 'redux/auth/auth-operations';
import Button from '@mui/material/Button';

export const AppBar = () => {
  const dispatch = useDispatch();

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

      <LinkStyled to="/contacts">
        <Typography variant="h6" sx={{ mr: 1 }}>
          Contacts
        </Typography>
      </LinkStyled>
      <Button
        variant="outlined"
        sx={{ flexWrap: 'wrap', display: { xs: 'flex' } }}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
