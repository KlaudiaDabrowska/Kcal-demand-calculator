import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bmi from './Bmi';
import { Wrapper } from './Root.styles';
import BasalMetabolicRate from './BasalMetabolicRate';
import TotalMetabolicRate from './TotalMetabolicRate';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Switch>
              <Route path="/total-metabolic-rate">
                <TotalMetabolicRate />
              </Route>
              <Route path="/basal-metabolic-rate">
                <BasalMetabolicRate />
              </Route>
              <Route path="/">
                <Bmi />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
