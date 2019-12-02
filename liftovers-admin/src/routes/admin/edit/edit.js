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

class EditAdmin extends Component{

  constructor(props) {
      super(props);
      this.state = {
        admin: {}
      };

      this.handleChange = this.handleChange.bind(this);
      this.editAdmin = this.editAdmin.bind(this);
    }

    componentDidMount() {
            this.getAdmin();
        }

    getAdmin() {
            // extract the id from the URL
            const adminId = this.props.match.params.admin_id

            fetch(ApiUrl + "/user/" + adminId, {
                method: "GET"
            }).then(result => result.json())
            .then (result => this.setState ({ admin: result }))
        }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    editAdmin(event) {
      event.preventDefault();
      const data = new FormData(event.target);

      // extract the id from the URL
      const adminId = this.props.match.params.admin_id

      var object = {};
      data.forEach(function(value, key) {
        object[key] = value;
      });
      var json = JSON.stringify(object);
      console.log(json);

      fetch(ApiUrl + "/user/" + adminId, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: json,
      });

      window.location = "/admins"
    }

    handleChange(propertyName, event) {
        if (!event.target) {
            const admin = this.state.admin;
            admin[propertyName] = event.value;
            this.setState({ admin: admin });
        } else {
            const admin = this.state.admin;
            admin[propertyName] = event.target.value;
            this.setState({ admin: admin });
        }
      }

    render() {

      // Conditional rendering for default values of the drop downs on the form
      const originalRole = this.state.admin.role;
      let originalRoleLabel;
      if (originalRole === "superAdmin") {
        originalRoleLabel = "Super Administrator";
      } else {
        originalRoleLabel = "Administrator";
      }

      const originalMethodOfCommmunication = this.state.admin.methodOfCommunication;
      let originalMethodOfCommmunicationLabel;
      if (originalMethodOfCommmunication === "email") {
        originalMethodOfCommmunicationLabel = "Email";
      } else {
        originalMethodOfCommmunicationLabel = "Phone";
      }

      return (
        <form onSubmit={this.editAdmin}>
        <Boxed pad="5px 0">
                    <PageTitle data-test="title">&nbsp;&nbsp;&nbsp;&nbsp;
                        Edit Administrator { this.state.admin.name } { this.state.admin.surname }
                    </PageTitle>
        </Boxed>
        <Boxed pad="50px">
          <Input name="name" type="text" label="First Name" onChange={this.handleChange.bind(this, 'name')} value={ this.state.admin.name }  required forminput/><br/>
          <Input name="surname" type="text" label="Last Name" onChange={this.handleChange.bind(this, 'surname')} value={ this.state.admin.surname } required forminput/><br/>
          <Input name="email" type="text" label="Email Address" onChange={this.handleChange.bind(this, 'email')} value={ this.state.admin.email } required forminput/><br/>
          <Input name="phone" type="phone" label="Phone Number" onChange={this.handleChange.bind(this, 'phone')} value={ this.state.admin.phone } required forminput/><br/>
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
                { value: "superAdmin", label: "Super Administrator"}
            ]}
            name="role" type="select" label="Admin Role" onChange={this.handleChange.bind(this, 'role')} required forminput
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
export default withRouter (EditAdmin);
