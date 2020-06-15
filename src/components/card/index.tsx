import React, { FC } from 'react';

import { Container, Title, Row } from './styles';

const Card: FC = () => {
  return (
    <Container>
      <Title>Area Divison</Title>
      <Row> I am a Row </Row>
      <Row> I am a Row </Row>
    </Container>
  );
};

export default Card;
