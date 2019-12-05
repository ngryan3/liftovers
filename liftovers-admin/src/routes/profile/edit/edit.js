import React, {Component} from "react";
import { Grid, Button, Layout, Boxed, Input, SimpleSelect } from "flexibull";
import { Theme } from "flexibull/build/theme";
import {
  Header,
  Contain,
  ClearButton,
  Wrapper,
  Square,
  ClearLink
} from "../../../components/styles";
import { AdminLayout } from "../../../components/admin";
import Logo from "../../../assets/liftovers.jpg";
import styled from "styled-components";
import ApiUrl from "../../../api/config";

export const PageTitle = styled.h3`
  color: ${Theme.PrimaryFontColor};
  margin: 0;
  padding: 10px 0;
`;

const LogoHolder = styled.img`
  height: 100px !important;
`;

class EditProfile extends Component{

  constructor(props) {
      super(props);
      this.state = {
        self: {}
      };

      this.handleChange = this.handleChange.bind(this);
      this.editProfile = this.editProfile.bind(this);
    }

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

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    editProfile(event) {
      event.preventDefault();
      const data = new FormData(event.target);

      const userId = localStorage.getItem('currentUserID');

      var object = {};
      data.forEach(function(value, key) {
        object[key] = value;
      });
      var json = JSON.stringify(object);
      console.log(json);

      fetch(ApiUrl + "/user/" + userId, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: json,
      });

      window.location = "/profile"
    }

    handleChange(propertyName, event) {
        if (!event.target) {
            const self = this.state.self;
            self[propertyName] = event.value;
            this.setState({ self: self });
        } else {
            const self = this.state.self;
            self[propertyName] = event.target.value;
            this.setState({ self: self });
        }
      }

    render() {

      // Conditional rendering for default values of the drop downs on the form
      const originalRole = this.state.self.role;
      let originalRoleLabel;
      if (originalRole === "superAdmin") {
        originalRoleLabel = "Super Administrator";
      } else if (originalRole == "admin") {
        originalRoleLabel = "Administrator";
      } else {
        originalRoleLabel = "Volunteer";
      }

      const originalMethodOfCommmunication = this.state.self.methodOfCommunication;
      let originalMethodOfCommmunicationLabel;
      if (originalMethodOfCommmunication === "email") {
        originalMethodOfCommmunicationLabel = "Email";
      } else {
        originalMethodOfCommmunicationLabel = "Phone";
      }

      return (
        <form onSubmit={this.editProfile}>
        <Boxed pad="5px 0">
                    <PageTitle data-test="title">&nbsp;&nbsp;&nbsp;&nbsp;
                        Edit My Profile
                    </PageTitle>
        </Boxed>
        <Boxed pad="50px">
          <Input name="name" type="text" label="First Name" onChange={this.handleChange.bind(this, 'name')} value={ this.state.self.name }  required forminput/><br/>
          <Input name="surname" type="text" label="Last Name" onChange={this.handleChange.bind(this, 'surname')} value={ this.state.self.surname } required forminput/><br/>
          <Input name="email" type="text" label="Email Address" onChange={this.handleChange.bind(this, 'email')} value={ this.state.self.email } required forminput/><br/>
          <Input name="phone" type="phone" label="Phone Number" onChange={this.handleChange.bind(this, 'phone')} value={ this.state.self.phone } required forminput/><br/>
          <SimpleSelect
            value={{ label: originalMethodOfCommmunicationLabel, value: originalMethodOfCommmunication }}
            options={[
                { value: "email", label: "Email"},
                { value: "phone", label: "Phone"}
            ]}
            name="methodOfCommunication" type="select" label="Preferred Method of Communication" onChange={this.handleChange.bind(this, 'methodOfCommunication')} required forminput
          /><br/>
          <SimpleSelect
            value={{ label: originalRoleLabel, value: originalRole }}
            options={[
                { value: "admin", label: "Administrator"},
                { value: "superAdmin", label: "Super Administrator"},
                { value: "volunteer", label: "Volunteer"}
            ]}
            name="role" type="select" label="Role (You may not change this)" required forminput
           /><br/>
          <Button type="submit" value="Cancel">
            <a href="../"> Cancel </a>
          </Button>
          <Button type="submit" value="Submit">
            Save Changes
          </Button>
          </Boxed>
        </form>
      );
    }

}
export default EditProfile;
