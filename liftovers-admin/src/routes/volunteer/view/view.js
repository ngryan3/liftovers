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
// import getVolunteer from "../../../actions/volunteer";

export const PageTitle = styled.h3`
  color: ${Theme.PrimaryFontColor};
  margin: 0;
  padding: 10px 0;
`;

const LogoHolder = styled.img`
  height: 100px !important;
`;

// dummy variables
var name = "Faye"
var lastName = "Tan"

class ViewVolunteer extends Component{
    constructor(props) {
        super(props);
        this.state = {'name': ''};

        // extract the id from the URL
        const volunteerId = this.props.match.params.volunteer_id
        console.log(volunteerId);

        var volunteer = fetch(ApiUrl + "/volunteer/" + volunteerId)
            .then(results => {
                return results.json();
            })

        console.log(volunteer)
    };
    render() {
      return (
        <div>
            <Boxed pad="5px 0">
                        <PageTitle data-test="title">&nbsp;&nbsp;&nbsp;&nbsp;
                            Volunteer: { name } { lastName }
                        </PageTitle>
            </Boxed>
            <Boxed pad="50px">
              Name: { name } { lastName }<br />
              Surname: <br />
              Email: <br />
              Phone: <br />
              Preferred Method of Communication: <br />
              Postal Code: <br />
              Secondary Postal Code: <br />
              Availability: <br />
              Licensed: <br />
              Has A Vehicle: <br />
              Additional Notes: <br />
              Lifts: <br />
              Waiver Signed? <br />
              Status: <br />
              <br />
              <Button type="submit" value="Submit">
              Submit
              </Button>
              </Boxed>
        </div>
      );
    }

}
export default withRouter (ViewVolunteer);
