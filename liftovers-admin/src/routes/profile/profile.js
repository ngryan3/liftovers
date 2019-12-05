import React, {Component} from "react";
import { Grid, Button, Layout, Boxed, Input, SimpleSelect } from "flexibull";
import { Theme } from "flexibull/build/theme";
import {withRouter} from 'react-router-dom';
import {
  Header,
  Contain,
  ClearButton,
  Wrapper,
  Square,
  ClearLink
} from "../../components/styles";
import { AdminLayout } from "../../components/admin";
import Logo from "../../assets/liftovers.jpg";
import styled from "styled-components";
import ApiUrl from "../../api/config";

export const PageTitle = styled.h3`
  color: ${Theme.PrimaryFontColor};
  margin: 0;
  padding: 10px 0;
`;

const LogoHolder = styled.img`
  height: 100px !important;
`;

class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            self: {}
        };
    };

    componentDidMount() {
        this.getSelf();
    }

    getSelf() {
        const userId = localStorage.getItem('currentUserID');

        // DUMMY
        // const userId = '5dcf15df8ba6a8c1949e7adc';

        fetch(ApiUrl + "/user/" + userId, {
            method: "GET"
        }).then(result => result.json())
        .then (result => this.setState ({ self: result }))
    }

    render() {
      return (
        <div>
            <Boxed pad="5px 0">
            <PageTitle data-test="title">&nbsp;&nbsp;&nbsp;&nbsp;
                My Profile
            </PageTitle>
            </Boxed>
            <Boxed pad="50px">
                <b>Name:</b> { this.state.self.name } <br />
                <b>Surname:</b> { this.state.self.surname } <br />
                <b>Email:</b> { this.state.self.email } <br />
                <b>Phone:</b> { this.state.self.phone } <br />
                <b>Preferred Method of Communication: </b>  { this.state.self.methodOfCommunication }<br />
                <b>Last Updated: </b> { this.state.self.updatedAt } <br />
                <br />
            <Button style={{background:"#A6CBFF"}} type="submit" value="Edit">
                <a href={"../edit/" + this.state.self._id } >
                    Edit
                </a>
            </Button>
            </Boxed>
        </div>
      );
    }

}
export default Profile;
