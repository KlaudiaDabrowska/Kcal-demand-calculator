import styled from 'styled-components';
import image from '../../../assets/images/bmi.jpg';

export const Wrapper = styled.div`
  margin-top: 50px;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  text-align: center;
  font-weight: bold;
`;

export const Result = styled.p`
  text-align: center;
  color: ${({ result, theme }) => {
    if (result > 35) return theme.colors.extremelyObese;
    if (34.9 > result && result > 30) return theme.colors.obese;
    if (29.9 > result && result > 25) return theme.colors.overweight;
    if (24.9 > result && result > 18.5) return theme.colors.normal;
    if (result < 18.5) return theme.colors.underweight;
    return theme.colors.grey;
  }};
`;

export const Image = styled.div`
  width: 500px;
  height: 50px;
  margin: 0 auto;
  background-image: url(${image});
  background-repeat: no-repeat;
`;
