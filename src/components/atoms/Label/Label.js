import styled from 'styled-components';

export const Label = styled.label`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.87;
  margin-bottom: 5px;
`;
