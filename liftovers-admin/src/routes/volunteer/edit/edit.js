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

class EditVolunteer extends Component{

  constructor(props) {
      super(props);
      this.state = {
        volunteer: {}
      };

      this.handleChange = this.handleChange.bind(this);
      this.editVolunteer = this.editVolunteer.bind(this);
    }

    componentDidMount() {
        this.getVolunteer();
    }

    getVolunteer() {
        // extract the id from the URL
        const volunteerId = this.props.match.params.volunteer_id
        console.log(volunteerId);

        fetch(ApiUrl + "/volunteer/" + volunteerId, {
            method: "GET"
        }).then(result => result.json())
        .then (result => this.setState ({ volunteer: result }))
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    editVolunteer(event) {
      event.preventDefault();
      const data = new FormData(event.target);

      // extract id from URL
      const volunteerId = this.props.match.params.volunteer_id

      var object = {};
      var availdays = {};
      var availhours = {};
      data.forEach(function(value, key) {
        object[key] = value;
        if (key.includes("day")) {
          availdays[key] = value;
        }
        if (key.includes("time")) {
          availhours[key] = value;
        }
      });
      //Create availability object:
      var avail = [];

      if (availdays["daymon"] == "true") {
        avail.push({"day": "Monday",
          "timeStart": {"hour": availhours["timeStartHmon"],
            "minute": availhours["timeStartMmon"]},
          "timeFinish": {"hour": availhours["timeFinishHmon"],
            "minute": availhours["timeFinishMmon"]}})
      }

      if (availdays["daytue"] == "true") {
        avail.push({"day": "Tuesday",
          "timeStart": {"hour": availhours["timeStartHtue"],
            "minute": availhours["timeStartMtue"]},
          "timeFinish": {"hour": availhours["timeFinishHtue"],
            "minute": availhours["timeFinishMtue"]}})
      }

      if (availdays["daywed"] == "true") {
        avail.push({"day": "Wednesday",
          "timeStart": {"hour": availhours["timeStartHwed"],
            "minute": availhours["timeStartMwed"]},
          "timeFinish": {"hour": availhours["timeFinishHwed"],
            "minute": availhours["timeFinishMwed"]}})
      }

      if (availdays["daythu"] == "true") {
        avail.push({"day": "Thursday",
          "timeStart": {"hour": availhours["timeStartHthu"],
            "minute": availhours["timeStartMthu"]},
          "timeFinish": {"hour": availhours["timeFinishHthu"],
            "minute": availhours["timeFinishMthu"]}})
      }

      if (availdays["dayfri"] == "true") {
        avail.push({"day": "Friday",
          "timeStart": {"hour": availhours["timeStartHfri"],
            "minute": availhours["timeStartMfri"]},
          "timeFinish": {"hour": availhours["timeFinishHfri"],
            "minute": availhours["timeFinishMfri"]}})
      }

      if (availdays["daysat"] == "true") {
        avail.push({"day": "Saturday",
          "timeStart": {"hour": availhours["timeStartHsat"],
            "minute": availhours["timeStartMsat"]},
          "timeFinish": {"hour": availhours["timeFinishHsat"],
            "minute": availhours["timeFinishMsat"]}})
      }

      if (availdays["daysun"] == "true") {
        avail.push({"day": "Sunday",
          "timeStart": {"hour": availhours["timeStartHsun"],
            "minute": availhours["timeStartMsun"]},
          "timeFinish": {"hour": availhours["timeFinishHsun"],
            "minute": availhours["timeFinishMsun"]}})
      }
      object["availability"] = avail;
      var json = JSON.stringify(object);
      console.log(json);

      fetch(ApiUrl + "/volunteer/" + volunteerId, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: json,
      });

      window.location = "/volunteers"
    }

    handleChange(propertyName, event) {
        if (!event.target) {
            const volunteer = this.state.volunteer;
            volunteer[propertyName] = event.value;
            this.setState({ volunteer: volunteer });
        } else { // For normal inputs
            const volunteer = this.state.volunteer;
            volunteer[propertyName] = event.target.value;
            this.setState({ volunteer: volunteer });
        }
    }

    render() {

        // Conditional Rendering for the default values of the drop downs on the form
        const originalMethodOfCommunication = this.state.volunteer.methodOfCommunication;
        let originalMethodOfCommunicationLabel;
        if (originalMethodOfCommunication == "email") {
            originalMethodOfCommunicationLabel = "Email"
        } else {
            originalMethodOfCommunicationLabel = "Phone"
        }

        const originalLicensed = this.state.volunteer.licensed;
        let originalLicensedLabel;
        if (originalLicensed == "true") {
            originalLicensedLabel = "Yes";
        } else {
            originalLicensedLabel = "No";
        }

        const originalHasVehicle = this.state.volunteer.hasVehicle;
        let originalHasVehicleLabel;
        if (originalHasVehicle == "true") {
            originalHasVehicleLabel = "Yes";
        } else {
            originalHasVehicleLabel = "No";
        }

        const originalWaiverSigned = this.state.volunteer.waiverSigned;
        let originalWaiverSignedLabel;
        if (originalWaiverSigned == "true") {
            originalWaiverSignedLabel = "Yes";
        } else {
            originalWaiverSignedLabel = "No";
        }

      console.log(this.state.volunteer.additionalNotes)
      return (
        <form onSubmit={this.editVolunteer}>
        { isVolunteer() && <Boxed>
            You do not have access to this page!
        </Boxed> }
        { isAdmin() && <Boxed pad="5px 0">
                    <PageTitle data-test="title">&nbsp;&nbsp;&nbsp;&nbsp;
                        Edit Volunteer { this.state.volunteer.name } { this.state.volunteer.surname }
                    </PageTitle>
        </Boxed> }
        { isAdmin() && <Boxed pad="50px">
          <Input name="name" type="text" label="First Name" onChange={this.handleChange.bind(this, 'name')} value={ this.state.volunteer.name } required forminput/><br/>
          <Input name="surname" type="text" label="Last Name" onChange={this.handleChange.bind(this, 'surname')} value={ this.state.volunteer.surname } required forminput/><br/>
          <Input name="email" type="text" label="Email Address" onChange={this.handleChange.bind(this, 'email')} value={ this.state.volunteer.email } required forminput/><br/>
          <Input name="phone" type="phone" label="Phone Number" onChange={this.handleChange.bind(this, 'phone')} value={ this.state.volunteer.phone } required forminput/><br/>
          <SimpleSelect
            value={{ label: originalMethodOfCommunicationLabel, value: originalMethodOfCommunication }}
            options={[
            { value: "email", label: "Email"},
            { value: "phone", label: "Phone"}
            ]}
            name="methodOfCommunication" type="select" label="Preferred Method of Communication" onChange={this.handleChange.bind(this, "methodOfCommunication")} required forminput
          /><br/>
          <Input name="postalCode" type="text" label="Postal Code" onChange={this.handleChange.bind(this, 'postalCode')} value={ this.state.volunteer.postalCode } required forminput/><br/>
          <Input name="secondaryPostalCode" type="text" label="Secondary Postal Code" onChange={this.handleChange.bind(this, 'secondaryPostalCode')} value={ this.state.volunteer.secondaryPostalCode } /><br/>
          <SimpleSelect
            value={{ label: originalLicensedLabel, value: originalLicensed }}
            options={[
            { value: "true", label: "Yes"},
            { value: "false", label: "No"}
            ]}
            name="licensed" type="select" label="Valid Driver's License?" onChange={this.handleChange.bind(this, "licensed")} required forminput
           /><br/>
           <SimpleSelect
            value={{ label: originalHasVehicleLabel, value: originalHasVehicle }}
            options={[
            { value: "true", label: "Yes"},
            { value: "false", label: "No"}
            ]}
            name="hasVehicle" type="select" label="Do They Own a Vehicle?" onChange={this.handleChange.bind(this, "hasVehicle")} required forminput
            /><br/>

        {/*Monday:*/}
        <label for="">--Availability--</label>
        <div>
        <SimpleSelect
            options={[
            { value: "true", label: "Available"},
            { value: "false", label: "Not available"}
            ]}
            name="daymon" type="select" label="Monday" required forminput
           /><br/>
        </div>
        <div>
        <label for="">From </label>
        <select name="timeStartHmon">
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
        <select name="timeStartMmon">
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
        <select name="timeFinishHmon">
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
        <select name="timeFinishMmon">
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
        {/*Tuesday*/}
        <div>
        <SimpleSelect
            options={[
            { value: "true", label: "Available"},
            { value: "false", label: "Not available"}
            ]}
            name="daytue" type="select" label="Tuesday" required forminput
           /><br/>
        </div>
        <div>
        <label for="">From </label>
        <select name="timeStartHtue">
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
        <select name="timeStartMtue">
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
        <select name="timeFinishHtue">
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
        <select name="timeFinishMtue">
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
        {/*Wednesday*/}
        <div>
        <SimpleSelect
            options={[
            { value: "true", label: "Available"},
            { value: "false", label: "Not available"}
            ]}
            name="daywed" type="select" label="Wednesday" required forminput
           /><br/>
        </div>
        <div>
        <label for="">From </label>
        <select name="timeStartHwed">
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
        <select name="timeStartMwed">
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
        <select name="timeFinishHwed">
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
        <select name="timeFinishMwed">
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
        {/*Thursday*/}
        <div>
        <SimpleSelect
            options={[
            { value: "true", label: "Available"},
            { value: "false", label: "Not available"}
            ]}
            name="daythu" type="select" label="Thursday" required forminput
           /><br/>
        </div>
        <div>
        <label for="">From </label>
        <select name="timeStartHthu">
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
        <select name="timeStartMthu">
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
        <select name="timeFinishHthu">
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
        <select name="timeFinishMthu">
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
        {/*Friday*/}
        <div>
        <SimpleSelect
            options={[
            { value: "true", label: "Available"},
            { value: "false", label: "Not available"}
            ]}
            name="dayfri" type="select" label="Friday" required forminput
           /><br/>
        </div>
        <div>
        <label for="">From </label>
        <select name="timeStartHfri">
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
        <select name="timeStartMfri">
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
        <select name="timeFinishHfri">
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
        <select name="timeFinishMfri">
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
        {/*Saturday*/}
        <div>
        <SimpleSelect
            options={[
            { value: "true", label: "Available"},
            { value: "false", label: "Not available"}
            ]}
            name="daysat" type="select" label="Saturday" required forminput
           /><br/>
        </div>
        <div>
        <label for="">From </label>
        <select name="timeStartHsat">
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
        <select name="timeStartMsat">
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
        <select name="timeFinishHsat">
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
        <select name="timeFinishMsat">
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
        {/*Sunday*/}
        <div>
        <SimpleSelect
            options={[
            { value: "true", label: "Available"},
            { value: "false", label: "Not available"}
            ]}
            name="daysun" type="select" label="Sunday" required forminput
           /><br/>
        </div>
        <div>
        <label for="">From </label>
        <select name="timeStartHsun">
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
        <select name="timeStartMsun">
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
        <select name="timeFinishHsun">
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
        <select name="timeFinishMsun">
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

          <Input name="additionalNotes" type="text" label="Additional Notes" onChange={this.handleChange.bind(this, "additionalNotes")} value={ this.state.volunteer.additionalNotes }/><br/>
          <SimpleSelect
            value={{ label: originalWaiverSignedLabel, value: originalWaiverSigned }}
            options={[
            { value: "true", label: "Yes"},
            { value: "false", label: "No"}
            ]}
            name="waiverSigned" type="select" label="Waiver Signed?" onChange={this.handleChange.bind(this, "waiverSigned")} required forminput
            /><br/>
          <Button type="submit" value="Cancel">
            <a href="../"> Cancel </a>
          </Button>
          <Button type="submit" value="Submit">
            Save Changes
          </Button>
          </Boxed> }
        </form>
      );
    }

}
export default withRouter (EditVolunteer);
