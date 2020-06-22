import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import { modifyPoint, deletePoint } from 'reducers';

import {
  Container,
  PointNum,
  PointLatInput,
  PointAltInput,
  PointLonInput,
} from './styles';

import { DeleteButton } from '../area/styles';

import { POINT } from 'typings';

interface IProps {
  areaIndex: number;
  pointIndex: number;
  point: POINT;
}

const Point: FC<IProps> = ({ areaIndex, pointIndex, point }) => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();

  const removePoint = useCallback(() => {
    dispatch(deletePoint(areaIndex, pointIndex));
  }, [dispatch, areaIndex, pointIndex]);

  const changeLatValue = useCallback(
    (event) => {
      point.lat = event.target.value;
      dispatch(modifyPoint(areaIndex, pointIndex, point));
    },
    [dispatch, areaIndex, pointIndex, point]
  );

  const changeLonValue = useCallback(
    (event) => {
      point.lon = event.target.value;
      dispatch(modifyPoint(areaIndex, pointIndex, point));
    },
    [dispatch, areaIndex, pointIndex, point]
  );

  const changeAltValue = useCallback(
    (event) => {
      point.alt = event.target.value;
      dispatch(modifyPoint(areaIndex, pointIndex, point));
    },
    [dispatch, areaIndex, pointIndex, point]
  );

  return (
    <Container>
      <DeleteButton onClick={removePoint}>x</DeleteButton>
      <PointNum>{pointIndex + 1}</PointNum>
      <PointLatInput
        type="number"
        value={point.lat}
        step={0.00001}
        onChange={changeLatValue}
      />
      <PointLonInput
        type="number"
        value={point.lon}
        step={0.00001}
        onChange={changeLonValue}
      />
      <PointAltInput
        type="number"
        value={point.alt}
        step={0.1}
        onChange={changeAltValue}
      />
    </Container>
  );
};

export default Point;
