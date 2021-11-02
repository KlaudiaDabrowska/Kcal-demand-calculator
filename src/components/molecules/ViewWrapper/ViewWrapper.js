import styled from 'styled-components';

export const ViewWrapper = styled.div`
  margin: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 70%;
  padding: 40px 50px;
  border-radius: 25px;
  box-shadow: 5px 5px 15px -10px ${({ theme }) => theme.colors.lightSecond};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
