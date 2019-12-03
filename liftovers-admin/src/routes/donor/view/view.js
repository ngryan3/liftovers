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

class ViewDonor extends Component{
    constructor(props) {
        super(props);
        this.state = {
            donor: {}
        };
    };

    componentDidMount() {
        this.getDonor();
    }

    getDonor() {
        // extract the id from the URL
        const donorId = this.props.match.params.donor_id
        console.log(donorId)

        fetch(ApiUrl + "/donor/" + donorId, {
            method: "GET"
        }).then(result => result.json())
        .then (result => this.setState ({ donor: result }))
    }

    render() {

    console.log(this.state.donor);

    // TODO: pretty display of hours
    // TODO: pretty display of recurringTimes

    // Conditional Rendering for true/false values
    let recurringLabel;
    if (this.state.donor.recurring == true) {
        recurringLabel = "Yes";
    } else {
        recurringLabel = "No";
    }

      return (
        <div>
            <Boxed pad="5px 0">
                        <PageTitle>&nbsp;&nbsp;&nbsp;&nbsp;
                            Donor: { this.state.donor.contactName } { this.state.donor.contactSurname }
                        </PageTitle>
            </Boxed>
            <Boxed pad="50px">
              <b>Contact Name:</b> { this.state.donor.contactName }<br />
              <b>Contact Surname:</b> { this.state.donor.contactSurname } <br />
              <b>Contact Email:</b> { this.state.donor.contactEmail } <br />
              <b>Contact Phone:</b> { this.state.donor.contactPhone } <br />
              <b>Preferred Method of Communication:</b> { this.state.donor.methodOfCommunication } <br />
              <b>Location:</b> { this.state.donor.location } <br />
              <b>Hours:</b> { this.state.donor.hours } <br />
              <b>Recurring:</b> { recurringLabel } <br />
              <b>Recurring Times:</b> { this.state.donor.recurringTimes } <br />
              <b>Type of Food:</b> { this.state.donor.typeOfFood } <br />
              <b>Access Notes:</b> { this.state.donor.accessNotes } <br />
              <br />
              <Button type="submit" value="Back">
                <a href="../">
                    Back
                </a>
              </Button>
              <Button style={{background:"#A6CBFF"}} type="submit" value="Edit">
                <a href={"../edit/" + this.props.match.params.donor_id} >
                    Edit
                </a>
              </Button>
              <Button style={{background:"#FF8C83"}} type="submit" value="Delete">
                <a href={"../delete/" + this.props.match.params.donor_id} >
                    Delete
                </a>
              </Button>
              </Boxed>
        </div>
      );
    }

}
export default withRouter (ViewDonor);