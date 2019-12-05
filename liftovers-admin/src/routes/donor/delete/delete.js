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
import { isAdmin } from "../../../actions/admin"
import { isVolunteer } from "../../../actions/volunteer"

export const PageTitle = styled.h3`
  color: ${Theme.PrimaryFontColor};
  margin: 0;
  padding: 10px 0;
`;

const LogoHolder = styled.img`
  height: 100px !important;
`;

class DeleteDonor extends Component{
  constructor(props) {
      super(props);
      this.state = {
        donor: {},
        requestFullfilled: false
      };

      this.handleChange = this.handleChange.bind(this);
      this.deleteDonor = this.deleteDonor.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
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

    deleteDonor(event) {
        event.preventDefault();
        // extract the id from the URL
        const donorId = this.props.match.params.donor_id

        fetch(ApiUrl + "/Donor/" + donorId + "/delete", {
            method: 'POST'
        }).then(result => result.json())

        window.location = "/donors"
    }

    render() {
      return (
        <div>
            { isAdmin() && <Boxed pad="5px 0">
                        <PageTitle data-test="title">&nbsp;&nbsp;&nbsp;&nbsp;
                            Delete Donor { this.state.donor.contactName } { this.state.donor.contactSurname }
                        </PageTitle>
            </Boxed> } 
            { isVolunteer() && <Boxed>
                            You do not have access to this page!
                        </Boxed> }
            { isAdmin() && <Boxed pad="50px">
              <p> Are you sure you want to delete this donor? </p>
              <Button type="submit" value="Cancel">
                <a href="../">
                    Cancel
                </a>
              </Button>
              <Button onClick={this.deleteDonor} style={{background:"#FF8C83"}} value="Submit">
                Delete
              </Button>
              </Boxed> }
        </div>
      );
    }

}
export default withRouter (DeleteDonor);