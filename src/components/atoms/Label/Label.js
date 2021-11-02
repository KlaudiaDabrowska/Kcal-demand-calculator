import styled from 'styled-components';

export const Label = styled.label`
  /* font-family: Montserrat, sans-serif; */
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.87;
  margin-bottom: 5px;
`;
