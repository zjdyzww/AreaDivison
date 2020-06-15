import React, { FC } from 'react';
import { Viewer } from 'resium';

import { hot } from 'react-hot-loader/root';

import { SelectionComponent } from 'components';
import { Card } from 'components';

const App: FC = () => {
  return (
    <>
      <Card />
    </>
  );
};

export default hot(App);
