import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    padding-top: 5px;
    padding-bottom: 5px;
    flex-direction: row;
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    :hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
    padding: 10px;
  `}
`;

export const DeleteButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex: 1;
    opacity: 0.3;
    align-items: center;
    :hover {
      opacity: 1;
    }
    :before,
    :after {
      position: absolute;
      content: ' ';
      height: 10px;
      width: 2px;
      background-color: #333;
    }
    :before {
      transform: rotate(45deg);
    }
    :after {
      transform: rotate(-45deg);
    }
  `}
`;

export const AreaNameInput = styled.input`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 10;
  `}
`;
