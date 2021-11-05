import styled from 'styled-components';

export const Subtitle = styled.h3`
  margin-bottom: 50px;
  margin-top: 50px;
  padding: 0 20px;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.54;
  font-weight: 200;
  font-style: italic;
  text-align: center;
`;
