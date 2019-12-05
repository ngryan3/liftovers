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

class ViewAdmin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            admin: {}
        };
    };

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

    render() {
      return (
        <div>
            <Boxed pad="5px 0">
                        <PageTitle data-test="title">&nbsp;&nbsp;&nbsp;&nbsp;
                            Admin: { this.state.admin.name } { this.state.admin.surname }
                        </PageTitle>
            </Boxed>
            <Boxed pad="50px">
              <b>Name:</b> { this.state.admin.name } <br />
              <b>Surname:</b> { this.state.admin.surname } <br />
              <b>Email:</b> { this.state.admin.email } <br />
              <b>Phone:</b> { this.state.admin.phone } <br />
              <b>Preferred Method of Communication: </b>  { this.state.admin.methodOfCommunication }<br />
              <b>Role: </b> { this.state.admin.role } <br />
              <b>Last Updated: </b> { this.state.admin.updatedAt } <br />
              <br />
              <Button type="submit" value="Back">
                <a href="../">
                    Back
                </a>
              </Button>
              <Button style={{background:"#A6CBFF"}} type="submit" value="Edit">
                <a href={"../edit/" + this.props.match.params.admin_id} >
                    Edit
                </a>
              </Button>
              <Button style={{background:"#FF8C83"}} type="submit" value="Delete">
                <a href={"../delete/" + this.props.match.params.admin_id} >
                    Delete
                </a>
              </Button>
              </Boxed>
        </div>
      );
    }

}
export default withRouter (ViewAdmin);
