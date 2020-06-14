import React, { FC } from 'react';
import { useCesium } from 'resium';
import { ScreenSpaceEventType, ScreenSpaceEventHandler } from 'cesium';

const PointSelector: FC = () => {
  let context = useCesium<{
    viewer?: Cesium.Viewer;
  }>();

  let scene = context.viewer ? context.viewer.scene : undefined;

  let handler = scene ? new ScreenSpaceEventHandler(scene.canvas) : undefined;

  const clickPoint = () => {
    if (handler !== undefined)
      handler.setInputAction((clickEvent) => {
        console.log(clickEvent);
      }, ScreenSpaceEventType.LEFT_CLICK);
  };

  return <button onClick={clickPoint}> Click Event </button>;
};

export default PointSelector;
