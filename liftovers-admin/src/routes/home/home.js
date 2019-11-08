import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Grid, Layout, Boxed } from "flexibull";
import {
  Header,
  Contain,
  ClearButton,
  Wrapper,
  Square,
  ClearLink
} from "../../components/styles";
import Logo from "../../assets/liftovers.jpg";
import styled from "styled-components";
const LogoHolder = styled.img`
  height: 100px !important;
`;

const Home = () => {
  return (
    <Layout>
      <Wrapper>
        <Square />
        <Header>
          <Contain width="1200px">
            <Boxed pad="5px 10px">
              <Grid
                default="auto 100px 100px 140px"
                tablet="auto 100px 100px 140px"
                mobile="1fr"
                pad="10px"
              >
                <div>
                  <LogoHolder
                    src={Logo}
                    alt="National Examinations Council logo"
                    height="100px"
                  />
                </div>
                <div>
                  <Grid
                    default="auto 100px 100px 140px"
                    tablet="auto 100px 100px 140px"
                    mobile="1fr"
                    pad="1px"
                    >
                    <ClearLink>Home</ClearLink>
                    <ClearLink to="/signup">Sign Up</ClearLink>
                    <ClearLink to="/login">Login</ClearLink>
                    <ClearLink>About</ClearLink>
                  </Grid>
                </div>
              </Grid>
            </Boxed>
          </Contain>
        </Header>
      </Wrapper>
    </Layout>
  );
};


export default Home;

