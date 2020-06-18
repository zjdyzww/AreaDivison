import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import { removeArea, modifyArea } from 'reducers';

import { AREA } from 'typings';

import {
  Container,
  DeleteButton,
  AreaNameInput,
  ShowButton,
  Row,
  PointsContainer,
} from './styles';

interface IProps {
  area: AREA;
  index: number;
}

const Area: FC<IProps> = ({ area, index }) => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();

  const removeAreaFromList = useCallback(() => {
    dispatch(removeArea(area.areaName));
  }, [dispatch, area]);

  const modifyName = useCallback(
    (event) => {
      area.areaName = event.target.value;
      dispatch(modifyArea(index, area));
    },
    [dispatch, area]
  );

  const showArea = useCallback(() => {
    area.show = !area.show;
    dispatch(modifyArea(index, area));
  }, [dispatch, area]);

  return (
    <Container>
      <Row>
        <DeleteButton onClick={removeAreaFromList}>x</DeleteButton>
        <AreaNameInput
          type="text"
          value={area.areaName}
          onChange={modifyName}
        />
        <ShowButton onClick={showArea}>
          {area.show === false ? 'Show' : 'Hide'}
        </ShowButton>
      </Row>
      <Row>
        <PointsContainer show={area.show}>
          I show my points list!!
        </PointsContainer>
      </Row>
    </Container>
  );
};

export default Area;
