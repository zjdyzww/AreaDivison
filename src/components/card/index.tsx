import React, { FC } from 'react';

import { Container, Title, Row } from './styles';

import { AddAreaButton, AreaList } from 'components';

const Card: FC = () => {
  return (
    <Container>
      <Title>Area Divison</Title>
      <Row>
        {' '}
        <AddAreaButton />
      </Row>
      <AreaList />
    </Container>
  );
};

export default Card;
