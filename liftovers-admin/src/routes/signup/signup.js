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
          fields["firstname"] = "";
          fields["lastname"] = "";
          fields["phonenumber"] = "";
          fields["address"] = "";
          fields["postalcode"] = "";
          fields["email"] = "";
          fields["password"] = "";
          fields["passconfirmed"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["firstname"]) {
            formIsValid = false;
            errors["firstname"] = "*Please enter your first name.";
        }

        if (!fields["lastname"]) {
            formIsValid = false;
            errors["lastname"] = "*Please enter your last name.";
        }

        if (typeof fields["firstname"] !== "undefined" || typeof fields["lastname"] !== "undefined") {
            if (!fields["firstname"].match(/^[a-zA-Z]*$/)) {
              formIsValid = false;
              errors["firstname"] = "*Please enter alphabet characters only.";
            }
              if (!fields["lastname"].match(/^[a-zA-Z]*$/)) {
                  formIsValid = false;
                  errors["lastname"] = "*Please enter alphabet characters only.";
              }
        }

        if (!fields["phonenumber"]) {
            formIsValid = false;
            errors["phonenumber"] = "*Please enter your phone number.";
        }

        if (typeof fields["phonenumber"] !== "undefined") {
            if (!fields["phonenumber"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["phonenumber"] = "*Please enter a valid mobile no.";
            }
        }

        if (!fields["address"]) {
            formIsValid = false;
            errors["address"] = "*Please enter your address.";
        }

        if (typeof fields["address"] !== "undefined") {
            if (!fields["address"].match(/^[a-zA-Z0-9]*$/)) {
                formIsValid = false;
                errors["address"] = "*Please enter alphanumeric characters only.";
            }
        }

        if (!fields["postalcode"]) {
            formIsValid = false;
            errors["postalcode"] = "*Please enter your postal code.";
        }

        if (typeof fields["postalcode"] !== "undefined") {
            if (!fields["postalcode"].match(/^[a-zA-Z0-9]{6}$/)) {
                formIsValid = false;
                errors["postalcode"] = "*Please enter a valid postal code.";
            }
        }

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Please enter your email.";
        }

        if (typeof fields["email"] !== "undefined") {
            //regular expression for email validation
            let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
              formIsValid = false;
              errors["email"] = "*Please enter valid email.";
            }
        }

        if (!fields["password"] || !fields["passconfirmed"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
              formIsValid = false;
              errors["password"] = "*Please enter secure and strong password.";
            }
        }

        if (fields["password"] !== fields["passconfirmed"]){
            formIsValid = false;
            errors["passconfirmed"] = "*Not matching passwords"
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
                            <input style={{marginLeft: '30px'}}  size="lg" type="text" name="firstname" value={this.state.fields.username} onChange={this.handleChange} />
                        </label>
                        <div className="errorMsg"  style={{ color: 'red' }}>{this.state.errors.firstname}</div>
                        <br />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <label style={{marginLeft: '10px'}}>
                        Last Name:
                            <input style={{marginLeft: '30px'}}  size="lg" type="text" name="lastname" value={this.state.fields.username} onChange={this.handleChange} />
                        </label>
                        <div className="errorMsg"  style={{ color: 'red' }}>{this.state.errors.lastname}</div>
                    </Form.Group>
                    <br />
                    <Form.Group row>
                        <label  style={{marginLeft: '10px'}}>
                        Phone Number:
                        <input style={{marginLeft: '1px'}} type="text" name="phonenumber" value={this.state.fields.mobileno} onChange={this.handleChange} />
                        </label>
                        <div className="errorMsg" style={{ color: 'red' }}>{this.state.errors.phonenumber}</div>
                    </Form.Group>
                    <br />
                    <Form.Group row>
                        <label  style={{marginLeft: '10px'}}>
                        Main Address:
                            <input style={{marginLeft: '30px'}}  size="lg" type="text" name="address" value={this.state.fields.username} onChange={this.handleChange} />
                            <div className="errorMsg" style={{ color: 'red' }}>{this.state.errors.address}</div>
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
                            <input style={{marginLeft: '30px'}}  size="lg" type="text" name="postalcode" value={this.state.fields.username} onChange={this.handleChange} />
                            <div className="errorMsg" style={{ color: 'red' }}>{this.state.errors.postalcode}</div>
                        </label> <br />
                        <Form.Text className="text-muted">
                        We'll never share your Postal code with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <br />
                    <Form.Group row>
                        <label  style={{marginLeft: '10px'}}>
                        Email Address:
                        <input  style={{marginLeft: '8px'}} type="text" name="email" value={this.state.fields.email} onChange={this.handleChange}/>
                        </label>
                        <div className="errorMsg" style={{ color: 'red' }}>{this.state.errors.email}</div>
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
                        <input  style={{marginLeft: '40px'}} type="password" name="password"  value={this.state.fields.password} onChange={this.handleChange}  />
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
                            <input style={{marginLeft: '30px'}}  size="lg" type="password" name="passconfirmed" value={this.state.fields.username} onChange={this.handleChange} />
                            <div className="errorMsg" style={{ color: 'red' }}>{this.state.errors.passconfirmed}</div>
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
