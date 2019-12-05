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

class ViewProvider extends Component{
    constructor(props) {
        super(props);
        this.state = {
            provider: {}
        };
    };

    componentDidMount() {
        this.getProvider();
    }

    getProvider() {
        // extract the id from the URL
        const providerId = this.props.match.params.provider_id
        console.log(providerId)

        fetch(ApiUrl + "/provider/" + providerId, {
            method: "GET"
        }).then(result => result.json())
        .then (result => this.setState ({ provider: result }))
    }

    render() {

    console.log(this.state.provider);

    // TODO: pretty display of hours

      return (
        <div>
            <Boxed pad="5px 0">
                        <PageTitle>&nbsp;&nbsp;&nbsp;&nbsp;
                            Provider: { this.state.provider.contactName } { this.state.provider.contactSurname }
                        </PageTitle>
            </Boxed>
            <Boxed pad="50px">
              <b>Organization Name:</b> { this.state.provider.organizationName } <br/>
              <b>Contact Name:</b> { this.state.provider.contactName }<br />
              <b>Contact Surname:</b> { this.state.provider.contactSurname } <br />
              <b>Contact Email:</b> { this.state.provider.contactEmail } <br />
              <b>Contact Phone:</b> { this.state.provider.contactPhone } <br />
              <b>Preferred Method of Communication:</b> { this.state.provider.methodOfCommunication } <br />
              <b>Location:</b> { this.state.provider.location } <br />
              <b>Hours:</b> TODO <br />
              <b>Acceptable Foods:</b> { this.state.provider.acceptedFoods } <br />
              <b>Unacceptable Foods:</b> { this.state.provider.unacceptableFoods } <br />
              <br />
              <Button type="submit" value="Back">
                <a href="../">
                    Back
                </a>
              </Button>
              <Button style={{background:"#A6CBFF"}} type="submit" value="Edit">
                <a href={"../edit/" + this.props.match.params.provider_id} >
                    Edit
                </a>
              </Button>
              <Button style={{background:"#FF8C83"}} type="submit" value="Delete">
                <a href={"../delete/" + this.props.match.params.provider_id} >
                    Delete
                </a>
              </Button>
              </Boxed>
        </div>
      );
    }

}
export default withRouter (ViewProvider);