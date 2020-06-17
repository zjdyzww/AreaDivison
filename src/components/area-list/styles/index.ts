import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    overflow-x: auto;
    margin-right: 10px;

    ::-webkit-scrollbar {
      width: 0.2em;
      padding-right: 5px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    ::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      outline: 1px solid slategrey;
    }
  `}
`;
