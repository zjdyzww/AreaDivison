import React, { FC } from 'react';

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
  console.log(areaIndex, pointIndex, point);

  return (
    <Container>
      <DeleteButton>x</DeleteButton>
      <PointNum>{pointIndex + 1}</PointNum>
      <PointLatInput type="number" value={point.lat} step={0.00001} />
      <PointLonInput type="number" value={point.lon} step={0.00001} />
      <PointAltInput type="number" value={point.alt} step={0.1} />
    </Container>
  );
};

export default Point;
