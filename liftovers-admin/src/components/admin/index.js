import React, { Component } from "react";
import {
  Layout,
  Container,
  Grid,
  Boxed,
  SideNavigation,
  SideListing,
  AppBrand
} from "flexibull";
import { StyledSideList, Square, Footer } from "./style";
import styled from "styled-components";

import NavigationList from "../../menu.js";
import NavigationVoluntList from "../../volunteerMenu.js";

const Logo = styled.img`
  height: 90px !important;
`;
function NavList() {
  const userRole = localStorage.getItem('currentUserType');
  if (userRole == "admin"){
    return <SideListing links={NavigationList} collapse={false} NavLink />
  }else{
    return <SideListing links={NavigationVoluntList} collapse={false} NavLink/>
  }
}

export class AdminLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseMenu: false,
      mobileView: false
    };
  }
  render() {
    return (
      <Layout>
        <StyledSideList collapse={this.state.collapseMenu}>
          <SideNavigation
            onClick={() =>
              this.setState({ collapseMenu: !this.state.collapseMenu })
            }
            collapse={this.state.collapseMenu}
            float={this.state.mobileView}
            width="200px"
          >
            <AppBrand height="90px">
              <Logo
                src="https://pbs.twimg.com/profile_images/969567176670830592/0zckE4oP.jpg"
                alt=""
                height="90px"
              />
            </AppBrand>
            <NavList />
          </SideNavigation>
        </StyledSideList>
        <Container>
          <Grid default="100%" tablet="100%" mobile="100%">
            <Square />
            <Boxed pad="75px 15px 15px 15px">{this.props.children}</Boxed>
            <Footer>Copyight &copy; LifTOvers</Footer>
          </Grid>
        </Container>
      </Layout>
    );
  }
}
