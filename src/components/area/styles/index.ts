import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    padding-top: 5px;
    padding-bottom: 5px;
    flex-grow: 1;
    flex-direction: column;
    margin: 12px;
    margin-right: 2px;
    margin-top: 0px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    :hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
    padding: 10px;
  `}
`;

export const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
  `}
`;

export const DeleteButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex: 1;
    opacity: 0.3;
    align-items: center;
    color: #333;
    font-family: Arial, sans-serif;
    font-weight: bold;
    cursor: pointer;
    :hover {
      opacity: 1;
    }
  `}
`;

export const AreaNameInput = styled.input`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 10;
    margin-right: 5px;
  `}
`;

export const ShowButton = styled.button`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.maroon};
    border: 2px solid ${theme.colors.maroon};
    border-radius: 4px;
    color: ${theme.colors.white};
    cursor: pointer;
    display: flex;
    flex: 1;
    font-size: 16px;
    font-weight: bold;
    height: 20px;
    justify-content: center;
    margin-left: 5px;
    min-height: 20px;
    opacity: 0.9;
    padding: 10px;
    transition: ${theme.transition};

    &:focus {
      outline: none;
    }

    &:hover {
      opacity: 0.6;
    }
  `}
`;

interface IProps {
  show: boolean;
}

export const PointsContainer = styled.div<IProps>`
  ${({ theme, show }) => css`
    display: ${show ? 'flex' : 'none'};
    flex: 1;
  `}
`;
