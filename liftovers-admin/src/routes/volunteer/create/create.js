// FOR VOLUNTEER DATABASE NOT USER DATABASE

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

class CreateVolunteer extends Component{

  constructor(props) {
      super(props);
      this.state = {'name': ''};

      this.handleChange = this.handleChange.bind(this);
      this.createVolunteer = this.createVolunteer.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    createVolunteer(event) {
      event.preventDefault();
      const data = new FormData(event.target);

      var object = {};
      data.forEach(function(value, key) {
        object[key] = value;
      });
      var json = JSON.stringify(object);
      console.log(json);

      fetch(ApiUrl, {
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
        <form onSubmit={this.createVolunteer}>
        <Boxed pad="5px 0">
                    <PageTitle data-test="title">Create Volunteer</PageTitle>
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
          <Input name="postalCode" type="text" label="Postal Code" required forminput/><br/>
          <Input name="secondaryPostalCode" type="text" label="Secondary Postal Code"/><br/>
          <SimpleSelect
            options={[
            { value: "true", label: "Yes"},
            { value: "false", label: "No"}
            ]}
            name="licensed" type="select" label="Valid Driver's License?" required forminput
           /><br/>
           <SimpleSelect
            options={[
            { value: "true", label: "Yes"},
            { value: "false", label: "No"}
            ]}
            name="hasVehicle" type="select" label="Do They Own a Vehicle?" required forminput
            /><br/>
          <Input name="additionalNotes" type="text" label="Additional Notes"/><br/>
          <SimpleSelect
            options={[
            { value: "true", label: "Yes"},
            { value: "false", label: "No"}
            ]}
            name="waiverSigned" type="select" label="Waiver Signed?" required forminput
            /><br/>
          <Input type="submit" value="Submit" />
          </Boxed>
        </form>
      );
    }

}
export default CreateVolunteer;
