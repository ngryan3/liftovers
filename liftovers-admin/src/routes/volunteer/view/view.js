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

class ViewVolunteer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            volunteer: {}
        };
    };

    componentDidMount() {
        this.getVolunteer();
    }

    getVolunteer() {
        // extract the id from the URL
        const volunteerId = this.props.match.params.volunteer_id

        fetch(ApiUrl + "/volunteer/" + volunteerId, {
            method: "GET"
        }).then(result => result.json())
        .then (result => this.setState ({ volunteer: result }))
    }

    render() {
    // TODO: fix display of availability
    // TODO: fix display of lifts

    // Conditional Rendering for true/false values
    let licensedLabel;
    if (this.state.volunteer.licensed == true) {
        licensedLabel = "Yes";
    } else {
        licensedLabel = "No";
    }

    let hasVehicleLabel;
    if (this.state.volunteer.hasVehicle == true) {
        hasVehicleLabel = "Yes";
    } else {
       hasVehicleLabel = "No";
    }

    let waiverSignedLabel;
    if (this.state.volunteer.waiverSigned == true) {
        waiverSignedLabel = "Yes";
    } else {
       waiverSignedLabel = "No";
    }

      return (
        <div>
            <Boxed pad="5px 0">
                        <PageTitle data-test="title">&nbsp;&nbsp;&nbsp;&nbsp;
                            Volunteer: { this.state.volunteer.name } { this.state.volunteer.surname }
                        </PageTitle>
            </Boxed>
            <Boxed pad="50px">
              <b>Name:</b> { this.state.volunteer.name }<br />
              <b>Surname:</b> { this.state.volunteer.surname } <br />
              <b>Email:</b> { this.state.volunteer.email } <br />
              <b>Phone:</b> { this.state.volunteer.phone } <br />
              <b>Preferred Method of Communication:</b> { this.state.volunteer.methodOfCommunication } <br />
              <b>Postal Code:</b> { this.state.volunteer.postalCode } <br />
              <b>Secondary Postal Code:</b> { this.state.volunteer.secondaryPostalCode } <br />
              <b>Availability:</b>  <br />
              <b>Licensed:</b> { licensedLabel } <br />
              <b>Has A Vehicle:</b> { hasVehicleLabel } <br />
              <b>Additional Notes:</b> { this.state.volunteer.additionalNotes } <br />
              <b>Lifts:</b> <br />
              <b>Waiver Signed?</b> { waiverSignedLabel } <br />
              <br />
              <Button type="submit" value="Back">
                <a href="../">
                    Back
                </a>
              </Button>
              <Button style={{background:"#A6CBFF"}} type="submit" value="Edit">
                <a href={"../edit/" + this.props.match.params.volunteer_id} >
                    Edit
                </a>
              </Button>
              <Button style={{background:"#FF8C83"}} type="submit" value="Delete">
                <a href={"../delete/" + this.props.match.params.volunteer_id} >
                    Delete
                </a>
              </Button>
              </Boxed>
        </div>
      );
    }

}
export default withRouter (ViewVolunteer);
