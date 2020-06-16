import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import { removeArea } from 'reducers';

import { AREA } from 'typings';

import { Container, DeleteButton, AreaNameInput } from './styles';

interface IProps {
  area: AREA;
}

const Area: FC<IProps> = ({ area }) => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();

  const removeAreaFromList = useCallback(() => {
    dispatch(removeArea(area.areaName));
  }, [dispatch, area]);

  return (
    <Container>
      <DeleteButton onClick={removeAreaFromList} />
      <AreaNameInput type="text" value={area.areaName} />
    </Container>
  );
};

export default Area;
