import { AnyAction } from 'redux';
import { IReducer } from './interface';

import * as types from './types';

const initialState: IReducer = {};

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.ADD_AREA:
      let areaList = state.areaList ? state.areaList : [];
      areaList.push(action.areas);
      return { ...state, areaList };
    case types.REMOVE_AREA:
      areaList = state.areaList
        ? state.areaList.filter((item) => item.areaName == action.areaName)
        : [];
      return { ...state, areaList };
    default:
      return state;
  }
}

export default reducer;
