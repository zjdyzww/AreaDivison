import React, { FC } from 'react';
import { Viewer } from 'resium';

import { hot } from 'react-hot-loader/root';

import { SelectionComponent } from 'components';

const App: FC = () => {
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
        <SelectionComponent />
      </Viewer>
    </>
  );
};

export default hot(App);
