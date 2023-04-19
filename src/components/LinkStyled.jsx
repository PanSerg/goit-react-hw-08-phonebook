import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkStyled = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: inherit;

    &.active {
    /* color: #f50057; */
    text-decoration: underline;
  }
`;