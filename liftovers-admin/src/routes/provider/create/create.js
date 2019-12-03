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

class CreateProvider extends Component{

  constructor(props) {
      super(props);
      this.state = {'name': ''};

      this.handleChange = this.handleChange.bind(this);
      this.createProvider = this.createProvider.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    createProvider(event) {
      event.preventDefault();
      const data = new FormData(event.target);

      var object = {};
      data.forEach(function(value, key) {
        object[key] = value;
      });
      var json = JSON.stringify(object);
      console.log(json);

      fetch(ApiUrl + "/provider", { //Change to deployed website
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: json, // JSON.stringify
      });
      window.location = "/providers"
    }

    render() {
      return (
        <form onSubmit={this.createProvider}>
        <Boxed pad="5px 0">
                    <PageTitle data-test="title">Create Provider</PageTitle>
        </Boxed>
        <Boxed pad="50px">
          <Input name="contactName" type="text" label="Contact's First Name" required forminput/><br/>
          <Input name="contactSurname" type="text" label="Contact's Last Name" required forminput/><br/>
          <Input name="contactEmail" type="text" label="Contact's Email Address" required forminput/><br/>
          <Input name="contactPhone" type="phone" label="Contact's Phone Number" required forminput/><br/>
          <SimpleSelect
            options={[
            { value: "email", label: "Email"},
            { value: "phone", label: "Phone"}
            ]}
            name="methodOfCommunication" type="select" label="Preferred Method of Communication" required forminput
          /><br/>
          <Input name="location" type="text" label="Location" required forminput/><br/>
          <Input name="acceptedFoods" type="text" label="Accepted Foods" required forminput/><br/>
          <Input name="unacceptableFoods" type="text" label="Unacceptable Foods" required forminput/><br/>
          <br/>
          <Button type="submit" value="Submit">
            Submit
          </Button>
        </Boxed>
        </form>
      );
    }

}
export default CreateProvider;
