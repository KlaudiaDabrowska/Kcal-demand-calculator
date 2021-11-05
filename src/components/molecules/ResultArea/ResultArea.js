import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Result, Image } from './ResultArea.styles';
import bmiImage from '../../../assets/images/bmi.jpg';

const ResultArea = ({ appropriateText = '', result, isVisible, isAge }) => {
  return (
    <Wrapper isVisible={isVisible}>
      <Result result={result}>
        {appropriateText}
        {result}
      </Result>
      {!isAge && <Image src={bmiImage} width={500} height={50} />}
    </Wrapper>
  );
};

ResultArea.propTypes = {
  appropriateText: PropTypes.string,
  result: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default ResultArea;
