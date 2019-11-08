import React from "react";
import { Grid, Layout, Boxed } from "flexibull";
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
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["username"] = "";
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["password"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
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
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
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
                    <h3>Registration page</h3>
                    <Form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm}>
                    <br />
                    <Form.Group>
                        <label style={{marginLeft: '10px'}}>
                        First Name:
                            <input style={{marginLeft: '30px'}}  size="lg" type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
                        </label>
                        <div className="errorMsg"  style={{ color: 'red' }}>{this.state.errors.username}</div>
                        <br />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <label style={{marginLeft: '10px'}}>
                        Last Name:
                        <input style={{marginLeft: '31px'}}  type="text" name="lname" />
                        </label>
                    </Form.Group>
                    <br />
                    <Form.Group row>
                        <label  style={{marginLeft: '10px'}}>
                        Phone Number:
                        <input style={{marginLeft: '1px'}} type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange} />
                        </label>
                        <div className="errorMsg" style={{ color: 'red' }}>{this.state.errors.mobileno}</div>
                    </Form.Group>
                    <br />
                    <Form.Group row>
                        <label  style={{marginLeft: '10px'}}>
                        Main Address:
                        <input   style={{marginLeft: '10px'}}type="text" name="addr" />
                        </label> <br />
                        <Form.Text className="text-muted">
                        We'll never share your address with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <br />
                    <Form.Group row>
                        <label  style={{marginLeft: '10px'}}>
                        Main Address Postal Code:
                        <br />
                        <input  style={{marginLeft: '120px'}} type="text" name="pcode" />
                        </label> <br />
                        <Form.Text className="text-muted">
                        We'll never share your Postal code with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <br />
                    <Form.Group row>
                        <label  style={{marginLeft: '10px'}}>
                        Email Address:
                        <input  style={{marginLeft: '8px'}} type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}/>
                        </label>
                        <div className="errorMsg" style={{ color: 'red' }}>{this.state.errors.emailid}</div>
                         <br />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <br />
                    <br />
                    <Form.Group row>
                        <label  style={{marginLeft: '10px'}}>
                        Password:
                        <input  style={{marginLeft: '40px'}} type="text" name="password"  value={this.state.fields.password} onChange={this.handleChange}  />
                        </label>
                        <div className="errorMsg" style={{ color: 'red' }}>{this.state.errors.password}</div>
                    </Form.Group>
                    <Form.Text className="text-muted">
                        Password should be a combination of numbers and text.
                    </Form.Text>
                    <br />
                    <br />
                    <Form.Group row>
                        <label  style={{marginLeft: '10px'}}>
                        Re-enter Password:
                        <input  style={{marginLeft: '10px'}} type="text" name="passConf" />
                        </label>
                    </Form.Group>
                    <br />
                    <Form.Group row>
                        <input style={{marginLeft: '10px'}} type="submit" className="button"  value="Register"/>
                    </Form.Group>
                    </Form>
                </div>
            </div>
          </Wrapper>
        </Layout>
      );
  }


}

export default Signup;
