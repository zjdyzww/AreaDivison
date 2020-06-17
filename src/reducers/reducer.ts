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
    default:
      return state;
  }
}

export default reducer;
