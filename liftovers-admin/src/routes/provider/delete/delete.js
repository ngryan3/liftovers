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

class DeleteProvider extends Component{
  constructor(props) {
      super(props);
      this.state = {
        provider: {},
        requestFullfilled: false
      };

      this.handleChange = this.handleChange.bind(this);
      this.deleteProvider = this.deleteProvider.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
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

    deleteProvider(event) {
        event.preventDefault();
        // extract the id from the URL
        const providerId = this.props.match.params.provider_id

        fetch(ApiUrl + "/provider/" + providerId + "/delete", {
            method: 'POST'
        }).then(result => result.json())

        window.location = "/providers"
    }

    render() {
      return (
        <div>
            <Boxed pad="5px 0">
                        <PageTitle data-test="title">&nbsp;&nbsp;&nbsp;&nbsp;
                            Delete Provider { this.state.provider.contactName } { this.state.provider.contactSurname }
                        </PageTitle>
            </Boxed>
            <Boxed pad="50px">
              <p> Are you sure you want to delete this provider? </p>
              <Button type="submit" value="Cancel">
                <a href="../">
                    Cancel
                </a>
              </Button>
              <Button onClick={this.deleteProvider} style={{background:"#FF8C83"}} value="Submit">
                Delete
              </Button>
              </Boxed>
        </div>
      );
    }

}
export default withRouter (DeleteProvider);