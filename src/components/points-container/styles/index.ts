import styled, { css } from 'styled-components';

interface IProps {
  show: boolean;
}

export const Container = styled.div<IProps>`
  ${({ theme, show }) => css`
    display: ${show ? 'flex' : 'none'};
    flex: 1;
    flex-direction: column;
  `}
`;
