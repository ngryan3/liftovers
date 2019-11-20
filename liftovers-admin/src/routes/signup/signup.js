import React from "react";
import { Grid, Layout, Boxed, Input, SimpleSelect  } from "flexibull";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {
  Header,
  Contain,
  ClearButton,
  Wrapper,
  Square,
  ClearLink
} from "../../components/styles";
import Logo from "../../assets/liftovers.jpg";
import styled from "styled-components";
const LogoHolder = styled.img`
  height: 100px !important;
`;


class Signup extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault()
      if (this.validateForm() | true) {   
          //
          let myForm = document.getElementById('myForm');
          const data = new FormData(myForm);

          var object = {};
          data.forEach(function(value, key) {
            object[key] = value;
          });
          var json = JSON.stringify(object);
          console.log(json);

          /*fetch("http://localhost:7000/volunteer", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: json, // JSON.stringify
          });
          */
      }

    }


    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["firstname"]) {
        formIsValid = false;
        errors["firstname"] = "*Please enter your firstname.";
      }
      if (!fields["lastname"]) {
        formIsValid = false;
        errors["lastname"] = "*Please enter your lastname.";
      }

      if (typeof fields["firstname"] !== "undefined") {
        if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["firstname"] = "*Please enter alphabet characters only.";
        }
      }
      if (typeof fields["lastname"] !== "undefined") {
        if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["lastname"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (!fields["address"]) {
        formIsValid = false;
        errors["address"] = "*Please enter your Main Resident address.";
      }

      if (typeof fields["email"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter your mobile no.";
      }

      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter valid mobile no.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        // if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        //   formIsValid = false;
        //   errors["password"] = "*Please enter secure and strong password.";
        // }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
      return (
        <Layout>
          <Wrapper>
            <Square />
            <Header>
              <Contain width="1200px">
                <Boxed pad="5px 10px">
                  <Grid
                    default="auto 100px 100px 140px"
                    tablet="auto 100px 100px 140px"
                    mobile="1fr"
                    pad="10px"
                  >
                    <div>
                      <LogoHolder
                        src={Logo}
                        alt="National Examinations Council logo"
                        height="100px"
                      />
                    </div>
                    <ClearLink to="/">Home</ClearLink>
                    <ClearLink to="/login">Login</ClearLink>
                  </Grid>
                </Boxed>
              </Contain>
            </Header>
            <div id="main-registration-container">
                <div id="register">  
                <Boxed pad="50px">
                    <h2 style={{marginLeft: '1px', color: '#5e5e5e' }}>Sign up for liftovers</h2>
                    <form id="myForm" name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm}>
                    <br />
                    <Form.Group>
                        <Input  name="firstname" type="text" label="First Name"  value={this.state.fields.firstname} onChange={this.handleChange} required forminput/><br/>
                        <div className="errorMsg"  style={{ color: 'red' }}>{this.state.errors.firstname}</div>
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Input  type="text" name="lastname" label="Last Name"  value={this.state.fields.lastname} onChange={this.handleChange} required forminput />
                        <div className="errorMsg"  style={{ color: 'red' }}>{this.state.errors.lastname}</div>
                    </Form.Group>
                    <br />
                    <Form.Group row>  
                        <Input  type="text" label="Phone Number" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange} required forminput />
                        <div className="errorMsg" style={{ color: 'red' }}>{this.state.errors.mobileno}</div>
                    </Form.Group>
                    <br />
                    <Form.Group row>
                        <Input label="Main Address"   type="text" name="address" value={this.state.fields.address} onChange={this.handleChange} required forminput />
                        <Form.Text className="text-muted">
                        We'll never share your address with anyone else.
                        </Form.Text>
                        <div className="errorMsg" style={{ color: 'red' }}>{this.state.errors.address}</div>
                        <br />
                    </Form.Group>
                    <Form.Group row>
                        <Input  label="Main Address Postal Code" type="text" name="postalcode" value={this.state.fields.postalcode} onChange={this.handleChange} required forminput />
                        <Form.Text className="text-muted">
                        We'll never share your Postal code with anyone else.
                        </Form.Text>
                        <br />
                    </Form.Group>
                    <Form.Group row>
                        <Input  label="Secondary Postal Code" type="text" name="secpostalcode" value={this.state.fields.secpostalcode} onChange={this.handleChange} />
                        <Form.Text className="text-muted">
                         Enter secondary postal code if needed.
                        </Form.Text>
                        <br />
                    </Form.Group>
                    <Form.Group row>
                        <Input  label="Email Address" type="text" name="email" value={this.state.fields.email} onChange={this.handleChange} required forminput/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                        <div className="errorMsg" style={{ color: 'red' }}>{this.state.errors.email}</div>
                        <br />
                    </Form.Group>
                    <Form.Group row>
                        <Input  label="Password" type="text" name="password"  value={this.state.fields.password} onChange={this.handleChange} required forminput />
                        <Form.Text className="text-muted">
                        Password should be a combination of numbers and text.
                        </Form.Text>
                        <div className="errorMsg" style={{ color: 'red' }}>{this.state.errors.password}</div>
                        <br />
                    </Form.Group>
                    <Form.Group row>
                        <Input  label="Re-enter Password" type="text" name="passConf" onChange={this.handleChange} required forminput/>
                    </Form.Group>
                    <br />
                    <Form.Group row>
                        <Input  style={{ backgroundColor: '#00ffd9' }} to="/login" type="submit" className="button" onClick={this.submituserRegistrationForm} value="Register"/>
                    </Form.Group>
                    <br />
                    </form>
                    </Boxed>
                </div>
            </div>
          </Wrapper>
        </Layout>
      );
  }


};
export default Signup;
