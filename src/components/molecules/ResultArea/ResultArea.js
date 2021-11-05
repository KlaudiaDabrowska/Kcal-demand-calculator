import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Result, Image } from './ResultArea.styles';

const ResultArea = ({ appropriateText = '', result, isVisible }) => {
  return (
    <Wrapper isVisible={isVisible}>
      <Result result={result}>
        {appropriateText}
        {result}
      </Result>
      <Image />
    </Wrapper>
  );
};

ResultArea.propTypes = {
  appropriateText: PropTypes.string,
  result: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default ResultArea;
