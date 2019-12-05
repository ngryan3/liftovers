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

function clearStorage(){
    localStorage.clear();
    window.location.replace("http://localhost:3000")
}

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

        fetch(ApiUrl + "/user/" + userId, {
            method: "GET"
        }).then(result => result.json())
        .then (result => this.setState ({ self: result }))
    }

    render() {
        // Conditional rendering for default values of the drop downs on the form
        let roleLabel;
        if (this.state.self.role === "superAdmin") {
            roleLabel = "Super Administrator";
        } else if (this.state.self.role == "admin") {
            roleLabel = "Administrator";
        } else {
            roleLabel = "Volunteer";
        }

        let methodOfCommmunicationLabel;
        if (this.state.self.methodOfCommunication === "email") {
            methodOfCommmunicationLabel = "Email";
        } else {
            methodOfCommmunicationLabel = "Phone";
        }

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
                <b>Preferred Method of Communication: </b>  { methodOfCommmunicationLabel }<br />
                <b>Role: </b> { roleLabel } <br />
                <b>Last Updated: </b> { this.state.self.updatedAt } <br />
                <br />
            <Button style={{background:"#A6CBFF"}} type="submit" value="Edit">
                <a href={"/profile/edit/"} >
                    Edit
                </a>
            </Button>
                <ClearButton>
                    <ClearLink onClick={() => { clearStorage()}}  to="/login">Logout</ClearLink>
                </ClearButton>
            </Boxed>
        </div>
      );
    }

}
export default Profile;
