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
import { isAdmin, isSuperAdmin } from "../../../actions/admin"
import { isVolunteer } from "../../../actions/volunteer"

export const PageTitle = styled.h3`
  color: ${Theme.PrimaryFontColor};
  margin: 0;
  padding: 10px 0;
`;

const LogoHolder = styled.img`
  height: 100px !important;
`;


class DeleteAdmin extends Component{
  constructor(props) {
      super(props);
      this.state = {
            admin: {},
            requestFullfilled: false
      };

      this.handleChange = this.handleChange.bind(this);
      this.deleteAdmin = this.deleteAdmin.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    componentDidMount() {
      this.getAdmin();
    }

    getAdmin() {
        // extract the id from the URL
        const adminId = this.props.match.params.admin_id
        console.log(adminId);

        fetch(ApiUrl + "/user/" + adminId, {
            method: "GET"
        }).then(result => result.json())
        .then (result => this.setState ({ admin: result }))
    }

    deleteAdmin(event) {
        event.preventDefault();
      // extract the id from the URL
      const adminId = this.props.match.params.admin_id

      fetch(ApiUrl + "/user/" + adminId + "/delete", {
        method: 'POST'
      }).then(result => result.json())

      window.location = "/admins"
    }

    render() {
          return (
            <div>
            { isVolunteer() && <Boxed>
                            You do not have access to this page!
                        </Boxed> }
            { isAdmin() && <Boxed pad="5px 0">
                        <PageTitle data-test="title">&nbsp;&nbsp;&nbsp;&nbsp;
                            Delete Admin { this.state.admin.name } {this.state.admin.surname}
                        </PageTitle>
            </Boxed> }
            { isAdmin() && <Boxed pad="50px">
              <p> Are you sure you want to delete this administrator? </p>
              <Button type="submit" value="Cancel">
                <a href="../">
                    Cancel
                </a>
              </Button>
                  { isSuperAdmin() && <Button onClick={this.deleteAdmin} style={{background:"#FF8C83"}} value="Submit">
                    Delete
                  </Button> }
              </Boxed> }
            </div>
          );

    }

}
export default withRouter (DeleteAdmin);
