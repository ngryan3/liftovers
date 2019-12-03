import React, {Component} from "react";
import { Grid, Button, Layout, Boxed, Input, SimpleSelect } from "flexibull";
import { Theme } from "flexibull/build/theme";
import {withRouter} from 'react-router-dom';
import { AdminLayout } from "../../../components/admin";
import Logo from "../../../assets/liftovers.jpg";
import styled from "styled-components";
import ApiUrl from "../../../api/config";

export const PageTitle = styled.h3`
  color: ${Theme.PrimaryFontColor};
  margin: 0;
  padding: 10px 0;
`;

class EditDonor extends Component{

  constructor(props) {
      super(props);
      this.state = {
        donor: {}
      };

      this.handleChange = this.handleChange.bind(this);
      this.editDonor = this.editDonor.bind(this);
    }

    componentDidMount() {
        this.getDonor();
    }

    getDonor() {
        // extract the id from the URL
        const donorId = this.props.match.params.donor_id
        console.log(donorId);

        fetch(ApiUrl + "/donor/" + donorId, {
            method: "GET"
        }).then(result => result.json())
        .then (result => this.setState ({ donor: result }))
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    editDonor(event) {
      event.preventDefault();
      const data = new FormData(event.target);

      // extract id from URL
      const donorId = this.props.match.params.donor_id

      var object = {};
      data.forEach(function(value, key) {
        object[key] = value;
      });
      var json = JSON.stringify(object);
      console.log(json);

      fetch(ApiUrl + "/donor/" + donorId, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: json,
      });

      window.location = "/donors"
    }

    handleChange(propertyName, event) {
        if (!event.target) {
            const donor = this.state.donor;
            donor[propertyName] = event.value;
            this.setState({ donor: donor });
        } else { // For normal inputs
            const donor = this.state.donor;
            donor[propertyName] = event.target.value;
            this.setState({ donor: donor });
        }
    }

    render() {
        // TODO: ability to edit hours
        // TODO: ability to edit recurring times

        // Conditional Rendering for the default values of the drop downs on the form
        const originalMethodOfCommunication = this.state.donor.methodOfCommunication;
        let originalMethodOfCommunicationLabel;
        if (originalMethodOfCommunication == "email") {
            originalMethodOfCommunicationLabel = "Email"
        } else {
            originalMethodOfCommunicationLabel = "Phone"
        }

        const originalRecurring = this.state.donor.recurring;
        let originalRecurringLabel;
        if (originalRecurring == "true") {
            originalRecurringLabel = "Yes";
        } else {
            originalRecurringLabel = "No";
        }


      return (
        <form onSubmit={this.editDonor}>
        <Boxed pad="5px 0">
                    <PageTitle data-test="title">&nbsp;&nbsp;&nbsp;&nbsp;
                        Edit Donor { this.state.donor.contactName } { this.state.donor.contactSurname }
                    </PageTitle>
        </Boxed>
        <Boxed pad="50px">
          <Input name="contactName" type="text" label="First Name" onChange={this.handleChange.bind(this, 'contactName')} value={ this.state.donor.contactName } required forminput/><br/>
          <Input name="contactSurname" type="text" label="Last Name" onChange={this.handleChange.bind(this, 'contactSurname')} value={ this.state.donor.contactSurname } required forminput/><br/>
          <Input name="contactEmail" type="text" label="Email Address" onChange={this.handleChange.bind(this, 'contactEmail')} value={ this.state.donor.contactEmail } required forminput/><br/>
          <Input name="contactPhone" type="phone" label="Phone Number" onChange={this.handleChange.bind(this, 'contactPhone')} value={ this.state.donor.contactPhone } required forminput/><br/>
          <SimpleSelect
            value={{ label: originalMethodOfCommunicationLabel, value: originalMethodOfCommunication }}
            options={[
            { value: "email", label: "Email"},
            { value: "phone", label: "Phone"}
            ]}
            name="methodOfCommunication" type="select" label="Preferred Method of Communication" onChange={this.handleChange.bind(this, "methodOfCommunication")} required forminput
          /><br/>
          <Input name="location" type="text" label="Location" onChange={this.handleChange.bind(this, 'location')} value={ this.state.donor.location } required forminput/><br/>
          <Input name="typeOfFood" type="text" label="Type of Food Donation" onChange={this.handleChange.bind(this, 'typeOfFood')} value={ this.state.donor.typeOfFood } required forminput/> <br/>
          <SimpleSelect
            value={{ label: originalRecurringLabel, value: originalRecurring }}
            options={[
            { value: "true", label: "Yes"},
            { value: "false", label: "No"}
            ]}
            name="recurring" type="select" label="Recurring?" onChange={this.handleChange.bind(this, "recurring")} required forminput
           /><br/>
          <Input name="accessNotes" type="text" label="Access Notes" onChange={this.handleChange.bind(this, "accessNotes")} value={ this.state.donor.accessNotes }/><br/>
          <br/>
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
export default withRouter (EditDonor);