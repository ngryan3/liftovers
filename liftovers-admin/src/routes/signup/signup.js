import React from "react";
import { Grid, Layout, Boxed, Input, SimpleSelect  } from "flexibull";
import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
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
import ApiUrl from "../../api/config";
import Select from 'react-select'
const LogoHolder = styled.img`
  height: 100px !important;
`;

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            fields: {'avaliability' : []},
            errors: {},
            avaliabilty : []
        };
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    handleSelect = selectedOptions => {
      this.setState({avaliabilty : selectedOptions});
    };

    submituserRegistrationForm(e) {
        e.preventDefault()
        if (this.validateForm()) {
            //
            let myForm = document.getElementById('myForm');
            const data = new FormData(myForm);
            let avb = this.state.avaliabilty;
            var object = {};
            data.forEach(function(value, key) {
                if(key == "avaliability"){
                    object[key] = avb
                }else{
                    object[key] = value;
                }
            });
            object['status'] = 'waitingApproval';
            var json = JSON.stringify(object);
            console.log(json);
            fetch("https://liftovers-api.herokuapp.com/user", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: json, // JSON.stringify
            })
                .then(response => {
                    if (response.status === 400){
                        alert('Email already used, please use a different email');
                    } else if (response.status === 500){
                        alert('Some error occurred while creating the User');
                    }else{
                        alert('Successfully registered, please wait for one of our admins to review your registration');
                        window.location.replace('https://liftovers-admin.herokuapp.com')
                    }
                    return response.json()})
                .then(responseData => {console.log(responseData); return responseData})
                .then(data => {this.setState({"question:": data});})
                .catch(err => {
                    console.log("fetch error" + err);
                });
        }

    }


    validateForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "*Please enter your first name.";
        }
        if (!fields["surname"]) {
            formIsValid = false;
            errors["surname"] = "*Please enter your surname.";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["name"] = "*Please enter alphabet characters only.";
            }
        }
        if (typeof fields["surname"] !== "undefined") {
            if (!fields["surname"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["surname"] = "*Please enter alphabet characters only.";
            }
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

        if (!fields["phone"]) {
            formIsValid = false;
            errors["phone"] = "*Please enter your mobile no.";
        }

        if (typeof fields["phone"] !== "undefined") {
            if (!fields["phone"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["phone"] = "*Please enter valid mobile no.";
            }
        }


        if (!fields["postalcode"]){
            formIsValid = false;
            errors["postalcode"] = "*Please enter postal code."
        }

        if (typeof fields["postalcode"] !== "undefined"){
            if (!fields["postalcode"].match(/^[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] ?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]$/)){
                formIsValid = false;
                errors["postalcode"] = "*Please enter a valid Canadian postal code."
            }
        }
        if (typeof  fields["secpostalcode"] !== "undefined") {
            if (!fields["secpostalcode"].match(/^[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] ?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]$/)) {
                formIsValid = false;
                errors["secpostalcode"] = "*Please enter a valid Canadian postal code."
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

        if (!fields["passConf"]) {
            formIsValid = false;
            errors["passConf"] = "*Please confirm your password.";
        }

        if (typeof fields["passConf"] !== "undefined") {
            if (fields["passConf"] !== fields["password"]){
                formIsValid = false;
                errors["passConf"] = "*Passwords do not match. Please try again."
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
                                    <ClearButton>
                                        <ClearLink to="/">Home</ClearLink>
                                    </ClearButton>
                                    <ClearButton>
                                        <ClearLink to="/login">Login</ClearLink>
                                    </ClearButton>
                                </Grid>
                            </Boxed>
                        </Contain>
                    </Header>
                    <div id="main-registration-container">
                        <div id="register">
                            <Boxed pad="50px">
                                <h2 style={{marginLeft: '1px', color: '#5e5e5e' }}>Sign up for liftovers</h2>
                                <form id="myForm" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm}>
                                    <br />
                                    <Form.Group>
                                        <Input  name="name" type="text" label="First Name"  value={this.state.fields.name} onChange={this.handleChange} required forminput/><br/>
                                        <div className="errorMsg"  style={{ color: 'red' }}>{this.state.errors.name}</div>
                                    </Form.Group>
                                    <br />
                                    <Form.Group>
                                        <Input  type="text" name="surname" label="Last Name"  value={this.state.fields.surname} onChange={this.handleChange} required forminput />
                                        <div className="errorMsg"  style={{ color: 'red' }}>{this.state.errors.surname}</div>
                                    </Form.Group>
                                    <br />
                                    <Form.Group row>
                                        <Input  type="text" label="Phone Number" name="phone" value={this.state.fields.phone} onChange={this.handleChange} required forminput />
                                        <div className="errorMsg" style={{ color: 'red' }}>{this.state.errors.phone}</div>
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
                                        <div className="errorMsg" style={{ color: 'red' }}>{this.state.errors.postalcode}</div>
                                        <br />
                                    </Form.Group>
                                    <Form.Group row>
                                        <Input  label="Secondary Postal Code" type="text" name="secpostalcode" value={this.state.fields.secpostalcode} onChange={this.handleChange} />
                                        <Form.Text className="text-muted">
                                            Enter secondary postal code if needed.
                                        </Form.Text>
                                        <div className="errorMsg" style={{ color: 'red' }}>{this.state.errors.secpostalcode}</div>
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
                                    <div className="errorMsg" style={{ color: 'red' }}>{this.state.errors.passConf}</div>
                                    <br />
                                    <SimpleSelect
                                        options={[
                                            { value: "email", label: "Email" } ,
                                            { value: "phone", label: "Phone"}
                                        ]}
                                        name="methodOfCommunication" type="select" label="Preferred Method of Communication" required forminput
                                    />
                                    <br />
                                    <h2 style={{fontSize: '11px', color: '#5e5e5e' }}>PLEASE CHOOSE AVALIABILITY:</h2>
                                    <Form.Group row>
                                        <Select
                                            options = {[
                                                { value: 'Monday', label: 'Monday' },
                                                { value: 'Tuesday', label: 'Tuesday' },
                                                { value: 'Wednesday', label: 'Wednesday' },
                                                { value: 'Thursday', label: 'Thursday' },
                                                { value: 'Friday', label: 'Friday' },
                                                { value: 'Saturday', label: 'Saturday' },
                                                { value: 'Sunday', label: 'Sunday' }
                                              ]}

                                             value={this.state && this.state.avaliability}
                                             onChange={(...args) => this.handleSelect(...args)}
                                             isMulti={true} name="avaliability" type="select"  required forminput
                                        />
                                    </Form.Group>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <div class="fixed-bottom" >
                                    <Form.Group row>
                                        <Input  style={{ backgroundColor: '#00ffd9' }} to="/login" type="submit" className="button"  value="Register" onClick={this.validateForm}/>
                                    </Form.Group>
                                    </div>
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
