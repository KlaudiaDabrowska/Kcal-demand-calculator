import React from 'react';
import { Logo, NavBar, StyledLink, Wrapper } from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>Check out your: Body Mass Index, Total metabolic rate, PPM</h1>
      </Logo>
      <NavBar>
        <StyledLink exact to="/">
          Body Mass Index
        </StyledLink>
        <StyledLink to="/basal-metabolic-rate">Basal metabolic rate</StyledLink>
        {/* <StyledLink to="">PPM</StyledLink> */}
      </NavBar>
    </Wrapper>
  );
};

export default Navigation;
