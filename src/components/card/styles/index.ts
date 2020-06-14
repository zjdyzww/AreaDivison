import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 10px;
    top: 10px;
    background-color: ${theme.colors.white};
  `}
`;
