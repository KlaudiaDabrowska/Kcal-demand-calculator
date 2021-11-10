import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Result, Image } from './ResultArea.styles';
import bmiImage from '../../../assets/images/bmi.jpg';

const ResultArea = ({ appropriateText = '', result, isVisible, isImage }) => {
  return (
    <Wrapper isVisible={isVisible}>
      <Result result={result}>
        {appropriateText}
        {result}
      </Result>
      {isImage && <Image src={bmiImage} width={500} height={50} />}
    </Wrapper>
  );
};

ResultArea.propTypes = {
  appropriateText: PropTypes.string,
  result: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default ResultArea;
