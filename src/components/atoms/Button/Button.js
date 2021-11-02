import styled from 'styled-components';

export const Button = styled.button`
  padding: 7px 20px;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.colors.lightSecond};
  border-radius: 10px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.87;
  cursor: pointer;
  position: relative;
  left: 50%;
  transform: translate(-50%, 30%);
`;

export default Button;
