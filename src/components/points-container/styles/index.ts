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

export const Header1 = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    justify-content: center;
  `}
`;

export const Header2 = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 3;
    justify-content: center;
  `}
`;
