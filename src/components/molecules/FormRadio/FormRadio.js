import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & label {
    margin: 10px 0;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.black};
    opacity: 0.54;
  }
`;

const FormRadio = ({ onChange, value, label, name, id, type = 'radio' }) => {
  return (
    <Wrapper>
      <label htmlFor={id}>
        <input name={name} id={id} type={type} value={value} onChange={onChange}></input>
        {label}
      </label>
    </Wrapper>
  );
};

FormRadio.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormRadio;
