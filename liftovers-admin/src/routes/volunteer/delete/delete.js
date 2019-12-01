import React, {Component} from "react";
import { Grid, Button, Layout, Boxed, Input, SimpleSelect } from "flexibull";
import { Theme } from "flexibull/build/theme";
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

// Dummy
var name = "Faye"

class DeleteVolunteer extends Component{

  constructor(props) {
      super(props);
      this.state = {'name': ''};

      this.handleChange = this.handleChange.bind(this);
      this.deleteVolunteer = this.deleteVolunteer.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    deleteVolunteer(event) {
      event.preventDefault();
      const data = new FormData(event.target);

      var object = {};
      data.forEach(function(value, key) {
        object[key] = value;
      });
      var json = JSON.stringify(object);
      console.log(json);

      fetch(ApiUrl + "/volunteer", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: json, // JSON.stringify
      });
      window.location = "/volunteers"
    }

    render() {
      return (
        <form onSubmit={this.deleteVolunteer}>
        <Boxed pad="5px 0">
                    <PageTitle data-test="title">&nbsp;&nbsp;&nbsp;&nbsp;
                        Delete Volunteer { name }
                    </PageTitle>
        </Boxed>
        <Boxed pad="50px">
          <p> Are you sure you want to delete this volunteer? </p>
          <Button type="submit" value="Cancel">
            Cancel
          </Button>
          <Button style={{background:"#FF8C83"}} value="Submit">
            Delete
          </Button>
          </Boxed>
        </form>
      );
    }

}
export default DeleteVolunteer;
