import { AnyAction } from 'redux';
import { IReducer } from './interface';

import * as types from './types';

const initialState: IReducer = {};

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.ADD_AREA:
      if (action.area) {
        let areaList = state.areaList ? state.areaList : [];
        areaList.push(action.area);
        return { ...state, areaList };
      }
      return state;
    case types.REMOVE_AREA:
      let areaList = state.areaList
        ? state.areaList.filter((item) => item.areaName !== action.areaName)
        : [];
      return { ...state, areaList };
    case types.MODIFY_AREA:
      let list = state.areaList ? state.areaList : [];
      list[action.index] = action.area;
      return { ...state, areaList: list };
    case types.MODIFY_POINTS:
      let modifiedList = state.areaList ? state.areaList : [];
      modifiedList[action.areaIndex].points = action.points;
      return { ...state, areaList: modifiedList };
    case types.MODIFY_POINT:
      let modifiedareaList = state.areaList ? state.areaList : [];
      modifiedareaList[action.areaIndex].points[action.pointIndex] =
        action.point;
      return { ...state, areaList: modifiedareaList };
    case types.DELETE_POINT:
      let areaListModified = state.areaList ? state.areaList : [];
      areaListModified[action.areaIndex].points.splice(action.pointIndex, 1);
      return { ...state, areaList: areaListModified };
    default:
      return state;
  }
}

export default reducer;
