import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  margin-top: 50px;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  text-align: center;
  font-weight: bold;
`;

const Result = styled.p`
  text-align: center;
`;

const ResultArea = ({ appropriateText = '', result, isVisible }) => {
  return (
    <Wrapper isVisible={isVisible}>
      <Result>
        {appropriateText}
        {result}
      </Result>
    </Wrapper>
  );
};

ResultArea.propTypes = {
  appropriateText: PropTypes.string,
  result: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default ResultArea;
