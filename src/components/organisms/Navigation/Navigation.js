import React from 'react';
import { Logo, NavBar, StyledLink, Wrapper } from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>Check out your BMI, CPM, PPM</h1>
      </Logo>
      <NavBar>
        <StyledLink exact to="/">
          BMI
        </StyledLink>
        <StyledLink to="/">CPM</StyledLink>
        <StyledLink to="/">PPM</StyledLink>
      </NavBar>
    </Wrapper>
  );
};

export default Navigation;
