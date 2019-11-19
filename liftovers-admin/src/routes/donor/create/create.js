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

class CreateDonor extends Component{

  constructor(props) {
      super(props);
      this.state = {'name': ''};

      this.handleChange = this.handleChange.bind(this);
      this.createDonor = this.createDonor.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    createDonor(event) {
      event.preventDefault();
      const data = new FormData(event.target);

      var object = {};
      data.forEach(function(value, key) {
        object[key] = value;
      });
      var json = JSON.stringify(object);
      console.log(json);

      fetch(ApiUrl + "/donor", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: json, // JSON.stringify
      });
      window.location = "/donors"
    }

    render() {
      return (
        <form onSubmit={this.createDonor}>
        <Boxed pad="5px 0">
                    <PageTitle data-test="title">Create Donor</PageTitle>
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
          <Input nmae="typeOfFood" type="text" label="Type of Food Donation" required forminput/> <br/>
          <SimpleSelect
            options={[
            { value: "true", label: "Yes"},
            { value: "false", label: "No"}
            ]}
            name="recurring" type="select" label="Recurring Donation?" required forminput/><br/>
          <Input name="accessNotes" type="text" label="Access Notes" required forminput/><br/>
          <Input type="submit" value="Submit"/>
          </Boxed>
        </form>
      );
    }

}
export default CreateDonor;
