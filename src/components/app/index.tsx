import React, { FC } from 'react';
import { Viewer, Polyline, PolylineCollection } from 'resium';

import { hot } from 'react-hot-loader/root';

import { Card } from 'components';
import { Cartesian3 } from 'cesium';

const App: FC = () => {
  let positions: any[] = [];

  positions.push(new Cartesian3(-75, 35, 10000));
  positions.push(new Cartesian3(-125, 35, 10000));
  positions.push(new Cartesian3(-125, 135, 10000));
  return (
    <>
      <Viewer
        infoBox={false}
        selectionIndicator={false}
        shadows={false}
        shouldAnimate={false}
        baseLayerPicker={false}
        scene3DOnly={true}
        projectionPicker={false}
        homeButton={false}
        navigationHelpButton={false}
        geocoder={false}
        useBrowserRecommendedResolution={true}
        full
      >
        <PolylineCollection>
          <Polyline positions={positions} width={3} show={true} loop={true} />
        </PolylineCollection>
        <Card />
      </Viewer>
    </>
  );
};

export default hot(App);
