import React, { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import { IReducer, addArea } from 'reducers';
import { AREAS, AREA, AREANAME, POINTS } from 'typings';

interface IState {
  areaList?: AREAS;
}

const AddAreaButton: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();

  const state = useSelector<IReducer, IState>(({ areaList }) => ({
    areaList,
  }));

  const addAreaToList = useCallback(() => {
    const len = state.areaList
      ? parseInt(
          state.areaList[state.areaList.length - 1].areaName.split('_')[1]
        )
      : 0;
    let areaName: AREANAME = 'Area_' + (len + 1).toString();
    let points: POINTS = [];
    let area: AREA = { areaName, points };
    dispatch(addArea(area));
  }, [dispatch, state.areaList]);

  //  let areaComponentsList = state.areaList?.map((item, index) => (
  //    <Row key={index}>{item.areaName}</Row>
  //  ));

  return <button onClick={addAreaToList}>AddArea</button>;
};

export default AddAreaButton;
