import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import React from 'react';

const TotalMetabolicRate = () => {
  return (
    <ViewWrapper>
      <Title>Total metabolic rate</Title>
      <Subtitle>The total metabolic rate is the amount of energy you need per day to maintain your weight</Subtitle>
    </ViewWrapper>
  );
};

export default TotalMetabolicRate;
