import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.firstColor};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 55px auto;
  width: 50%;
`;

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  width: 100px;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.38;
  text-align: center;
  cursor: pointer;
  position: relative;

  &:hover {
    opacity: 0.54;
  }

  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    position: absolute;
    width: 70px;
    height: 3px;
    transform: translateY(-50%);
    top: 120%;
    right: 14px;
    background-color: ${({ theme }) => theme.colors.darkFirst};
  }
`;
