import React from "react";
import { Grid, Layout, Boxed } from "flexibull";
import {
  Header,
  Contain,
  ClearButton,
  Wrapper,
  Square
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
                <ClearButton>Profile</ClearButton>
                <ClearButton>About</ClearButton>
              </Grid>
            </Boxed>
          </Contain>
        </Header>

        <Contain width="1200px">
            <Boxed pad="5px 10px">
            <p> PROFILE HERE </p>
            </Boxed>
        </Contain>

      </Wrapper>
    </Layout>
  );
};

export default Home;
