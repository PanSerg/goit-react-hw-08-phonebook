import { useAuth } from 'hooks';
import { AppNav, UserMenu, AuthNav } from 'components';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

export function Header() {
    const { isLoggedIn } = useAuth();
    return (
      <AppBar position="fixed">
        <Container maxWidth="md">
          <div>
            <AppNav />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </div>
        </Container>
      </AppBar>
    );
}
