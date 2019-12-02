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

class EditVolunteer extends Component{

  constructor(props) {
      super(props);
      this.state = {
        volunteer: {}
      };

      this.handleChange = this.handleChange.bind(this);
      this.editVolunteer = this.editVolunteer.bind(this);
    }

    componentDidMount() {
        this.getVolunteer();
    }

    getVolunteer() {
        // extract the id from the URL
        const volunteerId = this.props.match.params.volunteer_id
        console.log(volunteerId);

        fetch(ApiUrl + "/volunteer/" + volunteerId, {
            method: "GET"
        }).then(result => result.json())
        .then (result => this.setState ({ volunteer: result }))
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    editVolunteer(event) {
      event.preventDefault();
      const data = new FormData(event.target);

      // extract id from URL
      const volunteerId = this.props.match.params.volunteer_id

      var object = {};
      data.forEach(function(value, key) {
        object[key] = value;
      });
      var json = JSON.stringify(object);
      console.log(json);

      fetch(ApiUrl + "/volunteer/" + volunteerId, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: json,
      });

      window.location = "/volunteers"
    }

    handleChange(propertyName, event) {
        if (!event.target) {
            const volunteer = this.state.volunteer;
            volunteer[propertyName] = event.value;
            this.setState({ volunteer: volunteer });
        } else { // For normal inputs
            const volunteer = this.state.volunteer;
            volunteer[propertyName] = event.target.value;
            this.setState({ volunteer: volunteer });
        }
    }

    render() {

        // Conditional Rendering for the default values of the drop downs on the form
        const originalMethodOfCommunication = this.state.volunteer.methodOfCommunication;
        let originalMethodOfCommunicationLabel;
        if (originalMethodOfCommunication == "email") {
            originalMethodOfCommunicationLabel = "Email"
        } else {
            originalMethodOfCommunicationLabel = "Phone"
        }

        const originalLicensed = this.state.volunteer.licensed;
        let originalLicensedLabel;
        if (originalLicensed == "true") {
            originalLicensedLabel = "Yes";
        } else {
            originalLicensedLabel = "No";
        }

        const originalHasVehicle = this.state.volunteer.hasVehicle;
        let originalHasVehicleLabel;
        if (originalHasVehicle == "true") {
            originalHasVehicleLabel = "Yes";
        } else {
            originalHasVehicleLabel = "No";
        }

        const originalWaiverSigned = this.state.volunteer.waiverSigned;
        let originalWaiverSignedLabel;
        if (originalWaiverSigned == "true") {
            originalWaiverSignedLabel = "Yes";
        } else {
            originalWaiverSignedLabel = "No";
        }

      console.log(this.state.volunteer.additionalNotes)
      return (
        <form onSubmit={this.editVolunteer}>
        <Boxed pad="5px 0">
                    <PageTitle data-test="title">&nbsp;&nbsp;&nbsp;&nbsp;
                        Edit Volunteer { this.state.volunteer.name } { this.state.volunteer.surname }
                    </PageTitle>
        </Boxed>
        <Boxed pad="50px">
          <Input name="name" type="text" label="First Name" onChange={this.handleChange.bind(this, 'name')} value={ this.state.volunteer.name } required forminput/><br/>
          <Input name="surname" type="text" label="Last Name" onChange={this.handleChange.bind(this, 'surname')} value={ this.state.volunteer.surname } required forminput/><br/>
          <Input name="email" type="text" label="Email Address" onChange={this.handleChange.bind(this, 'email')} value={ this.state.volunteer.email } required forminput/><br/>
          <Input name="phone" type="phone" label="Phone Number" onChange={this.handleChange.bind(this, 'phone')} value={ this.state.volunteer.phone } required forminput/><br/>
          <SimpleSelect
            value={{ label: originalMethodOfCommunicationLabel, value: originalMethodOfCommunication }}
            options={[
            { value: "email", label: "Email"},
            { value: "phone", label: "Phone"}
            ]}
            name="methodOfCommunication" type="select" label="Preferred Method of Communication" onChange={this.handleChange.bind(this, "methodOfCommunication")} required forminput
          /><br/>
          <Input name="postalCode" type="text" label="Postal Code" onChange={this.handleChange.bind(this, 'postalCode')} value={ this.state.volunteer.postalCode } required forminput/><br/>
          <Input name="secondaryPostalCode" type="text" label="Secondary Postal Code" onChange={this.handleChange.bind(this, 'secondaryPostalCode')} value={ this.state.volunteer.secondaryPostalCode } /><br/>
          <SimpleSelect
            value={{ label: originalLicensedLabel, value: originalLicensed }}
            options={[
            { value: "true", label: "Yes"},
            { value: "false", label: "No"}
            ]}
            name="licensed" type="select" label="Valid Driver's License?" onChange={this.handleChange.bind(this, "licensed")} required forminput
           /><br/>
           <SimpleSelect
            value={{ label: originalHasVehicleLabel, value: originalHasVehicle }}
            options={[
            { value: "true", label: "Yes"},
            { value: "false", label: "No"}
            ]}
            name="hasVehicle" type="select" label="Do They Own a Vehicle?" onChange={this.handleChange.bind(this, "hasVehicle")} required forminput
            /><br/>
          <Input name="additionalNotes" type="text" label="Additional Notes" onChange={this.handleChange.bind(this, "additionalNotes")} value={ this.state.volunteer.additionalNotes }/><br/>
          <SimpleSelect
            value={{ label: originalWaiverSignedLabel, value: originalWaiverSigned }}
            options={[
            { value: "true", label: "Yes"},
            { value: "false", label: "No"}
            ]}
            name="waiverSigned" type="select" label="Waiver Signed?" onChange={this.handleChange.bind(this, "waiverSigned")} required forminput
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
export default withRouter (EditVolunteer);
