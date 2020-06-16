import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IReducer } from 'reducers';

import { AREAS } from 'typings';

import { Row } from '../card/styles';

import { Area } from 'components';

interface IState {
  areaList?: AREAS;
}

const AreaList: FC = () => {
  const state = useSelector<IReducer, IState>(({ areaList }) => ({
    areaList,
  }));

  const componentsToDisplay: any[] = [];

  state.areaList
    ? state.areaList.map((item, index) => {
        componentsToDisplay.push(
          <Row key={index}>
            <Area area={item} />
          </Row>
        );
      })
    : [];

  return <>{componentsToDisplay}</>;
};

export default AreaList;
