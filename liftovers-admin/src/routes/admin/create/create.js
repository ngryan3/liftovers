// FOR USER DATABASE

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

class CreateAdmin extends Component{

  constructor(props) {
      super(props);
      this.state = {'name': ''};

      this.handleChange = this.handleChange.bind(this);
      this.createAdmin = this.createAdmin.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    createAdmin(event) {
      event.preventDefault();
      const data = new FormData(event.target);

      var object = {};
      data.forEach(function(value, key) {
        object[key] = value;
      });
      var json = JSON.stringify(object);
      console.log(json);

      fetch(ApiUrl, { //Change to deployed website
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: json, // JSON.stringify
      });
    }

    render() {
      return (
        <form onSubmit={this.createAdmin}>
        <Boxed pad="5px 0">
                    <PageTitle data-test="title">Create Administrator</PageTitle>
        </Boxed>
        <Boxed pad="50px">
          <Input name="name" type="text" label="First Name" required forminput/><br/>
          <Input name="surname" type="text" label="Last Name" required forminput/><br/>
          <Input name="email" type="text" label="Email Address" required forminput/><br/>
          <Input name="phone" type="phone" label="Phone Number" required forminput/><br/>
          <SimpleSelect
            options={[
            { value: "email", label: "Email"},
            { value: "phone", label: "Phone"}
            ]}
            name="methodOfCommunication" type="select" label="Preferred Method of Communication" required forminput
          /><br/>
          <SimpleSelect
            options={[
            { value: "admin", label: "Administrator"},
            { value: "superAdmin", label: "Super Administrator"}
            ]}
            name="role" type="select" label="Admin Role" required forminput
            /><br/>
          <Input type="submit" value="Submit" />
          </Boxed>
        </form>
      );
    }

}
export default CreateAdmin;
