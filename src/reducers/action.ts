import { AnyAction } from 'redux';

import * as types from './types';
import { AREA, AREANAME } from 'typings';

export const ADD_AREA = (area: AREA): AnyAction => ({
  area,
  type: types.ADD_AREA,
});

export const REMOVE_AREA = (areaName: AREANAME): AnyAction => ({
  areaName,
  type: types.REMOVE_AREA,
});
