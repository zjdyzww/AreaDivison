import { AnyAction } from 'redux';

import * as types from './types';
import { AREA, AREANAME, POINTS, POINT } from 'typings';

export const addArea = (area: AREA): AnyAction => ({
  area,
  type: types.ADD_AREA,
});

export const removeArea = (areaName: AREANAME): AnyAction => ({
  areaName,
  type: types.REMOVE_AREA,
});

export const modifyArea = (index: number, area: AREA): AnyAction => ({
  index,
  area,
  type: types.MODIFY_AREA,
});

export const modifyPoints = (areaIndex: number, points: POINTS): AnyAction => ({
  areaIndex,
  points,
  type: types.MODIFY_POINTS,
});

export const modifyPoint = (
  areaIndex: number,
  pointIndex: number,
  point: POINT
): AnyAction => ({
  areaIndex,
  pointIndex,
  point,
  type: types.MODIFY_POINT,
});

export const deletePoint = (
  areaIndex: number,
  pointIndex: number
): AnyAction => ({
  areaIndex,
  pointIndex,
  type: types.DELETE_POINT,
});
