// FOR VOLUNTEER DATABASE NOT USER DATABASE

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

class CreateVolunteer extends Component{

  constructor(props) {
      super(props);
      this.state = {'name': ''};

      this.handleChange = this.handleChange.bind(this);
      this.createVolunteer = this.createVolunteer.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    createVolunteer(event) {
      event.preventDefault();
      const data = new FormData(event.target);

      var object = {};
      var avail = {};
      data.forEach(function(value, key) {
        object[key] = value;
        if (key == "day" || key == "timeStartH" || key == "timeStartM" ||
         key == "timeFinishH" || key == "timeFinishM") {
          avail[key] = value;
        }
      });
      //Create timeStart and timeFinish objects:
      var timeStart = {};
      var timeFinish = {};
      timeStart["hour"] = avail["timeStartH"];
      timeStart["minute"] = avail["timeStartM"];
      timeFinish["hour"] = avail["timeFinishH"];
      timeFinish["minute"] = avail["timeFinishM"];
      avail["timeStart"] = timeStart;
      avail["timeFinish"] = timeFinish;
      object["availability"] = avail;

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
        <form onSubmit={this.createVolunteer}>
        <Boxed pad="5px 0">
                    <PageTitle data-test="title">&nbsp;&nbsp;&nbsp;&nbsp;
                        Create Volunteer
                    </PageTitle>
        </Boxed>
        <Boxed pad="50px">
          <Input name="name" type="text" label="First Name" required forminput/><br/>
          <Input name="surname" type="text" label="Last Name" required forminput/><br/>
          <Input name="email" type="text" label="Email Address" required forminput/><br/>
          <Input name="phone" type="phone" label="Phone Number" required forminput/><br/>
          <SimpleSelect
            options={[
            { value: "email", label: "Email"},
            { value: "phone", label: "Phone"}
            ]}
            name="methodOfCommunication" type="select" label="Preferred Method of Communication" required forminput
          /><br/>
          <Input name="postalCode" type="text" label="Postal Code" required forminput/><br/>
          <Input name="secondaryPostalCode" type="text" label="Secondary Postal Code"/><br/>
          <SimpleSelect
            options={[
            { value: "true", label: "Yes"},
            { value: "false", label: "No"}
            ]}
            name="licensed" type="select" label="Valid Driver's License?" required forminput
           /><br/>
           <SimpleSelect
            options={[
            { value: "true", label: "Yes"},
            { value: "false", label: "No"}
            ]}
            name="hasVehicle" type="select" label="Do They Own a Vehicle?" required forminput
          /><br/>

          <SimpleSelect
            options={[
            { value: "monday", label: "Monday"},
            { value: "tuesday", label: "Tuesday"},
            { value: "wednesday", label: "Wednesday"},
            { value: "thursday", label: "Thursday"},
            { value: "friday", label: "Friday"},
            { value: "saturday", label: "Saturday"},
            { value: "sunday", label: "Sunday"},
            ]}
            name="day" type="select" label="Availability" required forminput
            /><br/>
          
        <label for="">Time:</label>
        <div>
        <label for="">From </label>
        <select name="timeStartH">
          <option value="0">00</option>
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
          <option value="5">05</option>
          <option value="6">06</option>
          <option value="7">07</option>
          <option value="8">08</option>
          <option value="9">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
        </select>
        <label for="">:</label>
        <select name="timeStartM">
          <option value="0">00</option>
          <option value="5">05</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
          <option value="35">35</option>
          <option value="40">40</option>
          <option value="45">45</option>
          <option value="50">50</option>
          <option value="55">55</option>
        </select>
        <label for=""> to </label>
        <select name="timeFinishH">
          <option value="0">00</option>
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
          <option value="5">05</option>
          <option value="6">06</option>
          <option value="7">07</option>
          <option value="8">08</option>
          <option value="9">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
        </select>
        <label for="">:</label>
        <select name="timeFinishM">
          <option value="0">00</option>
          <option value="5">05</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
          <option value="35">35</option>
          <option value="40">40</option>
          <option value="45">45</option>
          <option value="50">50</option>
          <option value="55">55</option>
        </select>
        </div>  
          <label for="">-----</label>
                    
          <Input name="additionalNotes" type="text" label="Additional Notes"/><br/>
          <SimpleSelect
            options={[
            { value: "true", label: "Yes"},
            { value: "false", label: "No"}
            ]}
            name="waiverSigned" type="select" label="Waiver Signed?" required forminput
            /><br/>
          <Button type="submit" value="Submit">
            Submit
          </Button>
          </Boxed>
        </form>
      );
    }

}
export default CreateVolunteer;
