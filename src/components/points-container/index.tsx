import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { useCesium, Polyline, PolylineCollection } from 'resium';
import {
  ScreenSpaceEventType,
  ScreenSpaceEventHandler,
  Cartesian3,
  Cartographic,
  Math,
  Entity,
} from 'cesium';

import { Container, Header1, Header2 } from './styles';

import { Button } from '../add-area/styles';

import { modifyPoints } from 'reducers';

import { POINTS, POINT } from 'typings';

import { Point } from 'components';

import { Row } from '../area/styles';
import { EntityCollection } from 'cesium';

interface IProps {
  show: boolean;
  points: POINTS;
  areaIndex: number;
}

const PointsContainer: FC<IProps> = ({ show, points, areaIndex }) => {
  let context = useCesium<{
    viewer?: Cesium.Viewer;
  }>();

  let entites: any = new Entity();

  context.viewer?.entities.add(entites);

  let scene = context.viewer ? context.viewer.scene : undefined;

  let handler = scene ? new ScreenSpaceEventHandler(scene.canvas) : undefined;

  const dispatch = useDispatch<Dispatch<AnyAction>>();

  const addPoints = useCallback(() => {
    if (handler) {
      window.alert('Please Double LEft Click on the Globe to select a point!!');
      handler.setInputAction((clickEvent) => {
        let cartesian: Cartesian3 | undefined =
          context.viewer && scene
            ? context.viewer.camera.pickEllipsoid(
                clickEvent.position,
                scene?.globe.ellipsoid
              )
            : undefined;
        if (cartesian) {
          handler
            ? handler.removeInputAction(ScreenSpaceEventType.LEFT_DOUBLE_CLICK)
            : null;
          let cartographic: Cartographic = Cartographic.fromCartesian(
            cartesian
          );
          let pointsList = points;
          let pointToBeInserted: POINT = {
            lat: Math.toDegrees(cartographic.longitude),
            lon: Math.toDegrees(cartographic.latitude),
            alt: 10000.0,
          };
          pointsList.push(pointToBeInserted);
          dispatch(modifyPoints(areaIndex, pointsList));
        } else {
          alert('Please click within the Globe !!');
        }
      }, ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
    }
  }, [dispatch, points, areaIndex, context.viewer, scene, handler]);

  const pointsListToDisplay: any[] = [];

  let positions: any = [];

  points.map((item, index) => {
    pointsListToDisplay.push(
      <Point
        areaIndex={areaIndex}
        pointIndex={index}
        point={item}
        key={index}
      />
    );
    positions.push(new Cartesian3(item.lon, item.lat, item.alt));
  });

  console.log(positions);

  return (
    <Container show={show}>
      <Button onClick={addPoints}>ADD POINTS</Button>
      <Row>
        <Header1>SNo</Header1>
        <Header2>Lat</Header2>
        <Header2>Lon</Header2>
        <Header2>Alt</Header2>
      </Row>
      {pointsListToDisplay}
      <PolylineCollection>
        <Polyline positions={positions} width={3} show={show} loop={true} />
      </PolylineCollection>
    </Container>
  );
};

export default PointsContainer;
