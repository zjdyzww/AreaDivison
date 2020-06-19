import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import { Container } from './styles';

import { Button } from '../add-area/styles';

import { modifyPoints } from 'reducers';

import { POINTS, POINT } from 'typings';

import { Point } from 'components';

interface IProps {
  show: boolean;
  points: POINTS;
  areaIndex: number;
}

const PointsContainer: FC<IProps> = ({ show, points, areaIndex }) => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();

  const addPoints = useCallback(() => {
    let pointsList = points;
    let pointToBeInserted: POINT = {
      lat: 90.45237,
      lon: 90.45237,
      alt: 10000.0,
    };
    pointsList.push(pointToBeInserted);
    dispatch(modifyPoints(areaIndex, pointsList));
  }, [dispatch, points, areaIndex]);

  const pointsListToDisplay: any[] = [];

  points.map((item, index) => {
    pointsListToDisplay.push(
      <Point
        areaIndex={areaIndex}
        pointIndex={index}
        point={item}
        key={index}
      />
    );
  });

  return (
    <Container show={show}>
      <Button onClick={addPoints}>ADD POINTS</Button>
      {pointsListToDisplay}
    </Container>
  );
};

export default PointsContainer;
