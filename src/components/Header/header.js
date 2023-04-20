import { useAuth } from 'hooks';
import { UserMenu, AuthNav } from 'components';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

export function Header() {
    const { isLoggedIn } = useAuth();
    return (
      <AppBar position="fixed">
        <Container maxWidth="md">
          <Toolbar disableGutters>
            
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </Container>
      </AppBar>
    );
}
