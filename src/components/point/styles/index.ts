import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  `}
`;

export const PointNum = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    margin-right: 5px;
    justify-content: center;
    align-items: center;
  `}
`;

export const PointLatInput = styled.input`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    margin-right: 5px;
    width: 120px;
  `}
`;

export const PointLonInput = styled.input`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    margin-right: 5px;
    width: 120px;
  `}
`;

export const PointAltInput = styled.input`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    margin-right: 5px;
    width: 120px;
  `}
`;
