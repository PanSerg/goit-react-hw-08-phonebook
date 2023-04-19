import styled from '@emotion/styled';

export const LinkStyled = styled()`
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