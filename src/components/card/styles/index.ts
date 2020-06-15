import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 10px;
    top: 10px;
    background-color: ${theme.colors.white};
    display: flex;
    border-radius: 15px;
    max-height: fit-content;
    padding: 0px;
    flex-direction: column;
    flex: 1;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    margin: 0px;
    width: 512px;
    font-style: bold;
    text-transform: uppercase;
    justify-content: center;
    font-weight: bold;
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  `}
`;

export const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: row;
  `}
`;
