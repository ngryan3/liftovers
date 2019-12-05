import React, {Component} from "react";
import { Grid, Button, Layout, Boxed, Input, SimpleSelect } from "flexibull";
import { Theme } from "flexibull/build/theme";
import {withRouter} from 'react-router-dom';
import { AdminLayout } from "../../../components/admin";
import Logo from "../../../assets/liftovers.jpg";
import styled from "styled-components";
import ApiUrl from "../../../api/config";
import { isAdmin } from "../../../actions/admin"
import { isVolunteer } from "../../../actions/volunteer"

export const PageTitle = styled.h3`
  color: ${Theme.PrimaryFontColor};
  margin: 0;
  padding: 10px 0;
`;

class EditProvider extends Component{

  constructor(props) {
      super(props);
      this.state = {
        provider: {}
      };

      this.handleChange = this.handleChange.bind(this);
      this.editProvider = this.editProvider.bind(this);
    }

    componentDidMount() {
        this.getProvider();
    }

    getProvider() {
        // extract the id from the URL
        const providerId = this.props.match.params.provider_id
        console.log(providerId);

        fetch(ApiUrl + "/provider/" + providerId, {
            method: "GET"
        }).then(result => result.json())
        .then (result => this.setState ({ provider: result }))
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    editProvider(event) {
      event.preventDefault();
      const data = new FormData(event.target);

      // extract id from URL
      const providerId = this.props.match.params.provider_id

      var object = {};
      data.forEach(function(value, key) {
        object[key] = value;
      });
      var json = JSON.stringify(object);
      console.log(json);

      fetch(ApiUrl + "/provider/" + providerId, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: json,
      });

      window.location = "/providers"
    }

    handleChange(propertyName, event) {
        if (!event.target) {
            const provider = this.state.provider;
            provider[propertyName] = event.value;
            this.setState({ provider: provider });
        } else { // For normal inputs
            const provider = this.state.provider;
            provider[propertyName] = event.target.value;
            this.setState({ provider: provider });
        }
    }

    render() {
        // TODO: ability to edit hours
        // TODO: ability to edit recurring times

        // Conditional Rendering for the default values of the drop downs on the form
        const originalMethodOfCommunication = this.state.provider.methodOfCommunication;
        let originalMethodOfCommunicationLabel;
        if (originalMethodOfCommunication == "email") {
            originalMethodOfCommunicationLabel = "Email"
        } else {
            originalMethodOfCommunicationLabel = "Phone"
        }

      return (
        <form onSubmit={this.editProvider}>
        { isVolunteer() && <Boxed>
                        You do not have access to this page!
                    </Boxed> }
        { isAdmin() && <Boxed pad="5px 0">
                    <PageTitle data-test="title">&nbsp;&nbsp;&nbsp;&nbsp;
                        Edit Provider { this.state.provider.contactName } { this.state.provider.contactSurname }
                    </PageTitle>
        </Boxed> }
        { isAdmin() && <Boxed pad="50px">
          <Input name="organizationName" type="text" label="Organization Name" onChange={this.handleChange.bind(this, 'organizationName')} value={ this.state.provider.organizationName } required forminput/><br/>
          <Input name="contactName" type="text" label="First Name" onChange={this.handleChange.bind(this, 'contactName')} value={ this.state.provider.contactName } required forminput/><br/>
          <Input name="contactSurname" type="text" label="Last Name" onChange={this.handleChange.bind(this, 'contactSurname')} value={ this.state.provider.contactSurname } required forminput/><br/>
          <Input name="contactEmail" type="text" label="Email Address" onChange={this.handleChange.bind(this, 'contactEmail')} value={ this.state.provider.contactEmail } required forminput/><br/>
          <Input name="contactPhone" type="phone" label="Phone Number" onChange={this.handleChange.bind(this, 'contactPhone')} value={ this.state.provider.contactPhone } required forminput/><br/>
          <SimpleSelect
            value={{ label: originalMethodOfCommunicationLabel, value: originalMethodOfCommunication }}
            options={[
            { value: "email", label: "Email"},
            { value: "phone", label: "Phone"}
            ]}
            name="methodOfCommunication" type="select" label="Preferred Method of Communication" onChange={this.handleChange.bind(this, "methodOfCommunication")} required forminput
          /><br/>
          <Input name="location" type="text" label="Location" onChange={this.handleChange.bind(this, 'location')} value={ this.state.provider.location } required forminput/><br/>
          <Input name="acceptedFoods" type="text" label="Acceptable Foods" onChange={this.handleChange.bind(this, 'acceptedFoods')} value={ this.state.provider.acceptedFoods } required forminput/> <br/>
          <Input name="unacceptableFoods" type="text" label="Unacceptable Foods" onChange={this.handleChange.bind(this, "unacceptableFoods")} value={ this.state.provider.unacceptableFoods }/><br/>
          <br/>
          <Button type="submit" value="Cancel">
            <a href="../"> Cancel </a>
          </Button>
          <Button type="submit" value="Submit">
            Save Changes
          </Button>
          </Boxed> }
        </form>
      );
    }

}
export default withRouter (EditProvider);