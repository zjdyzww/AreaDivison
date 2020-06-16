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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    :hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    margin: 0px;
    width: 480px;
    font-style: bold;
    text-transform: uppercase;
    justify-content: center;
    font-weight: bold;
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
  `}
`;

export const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    padding-top: 2.5px;
    padding-bottom: 2.5px;
  `}
`;
