import React, {Component} from "react";
import { Grid, Layout, Boxed, Input } from "flexibull";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import ApiUrl from "../../../api/config";
import {
    Header,
    Contain,
    ClearButton,
    Wrapper,
    Square,
    ClearLink
} from "../../../components/styles";
import Logo from "../../../assets/liftovers.jpg";
import styled from "styled-components";
const LogoHolder = styled.img`
  height: 100px !important;
`;


class Reset extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            fields: {},
            errors: {}
        };

        this.update = this.update.bind(this);
        this.passwordreset = this.passwordreset.bind(this);

    }

    update(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }

    componentDidMount() {
        fetch(ApiUrl + this.props.location.pathname, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET',
        })
            .then(response => {
                if (response.status === 400){
                    alert('Link is invalid')
                    window.location.replace('https://liftovers-admin.herokuapp.com')
                }
            })
    }

    passwordreset(e) {
        e.preventDefault();
        if (this.validateForm() || true){
            let myForm = document.getElementById('myForm');
            const data = new FormData(myForm);
            var object = {};
            data.forEach(function(value, key) {
                object[key] = value;
            });
            var json = JSON.stringify(object);
            console.log(json);

            fetch(ApiUrl + this.props.location.pathname, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: json, // JSON.stringify
            })
                .then(response => {
                    if (response.status === 400) {
                        alert('Password reset token is does not exists or has expired.');
                    }
                    if (response.status === 500) {
                        alert('Some error occurred while changing password.');
                    }
                    if (response.status === 200) {
                        alert('Password was changed');
                        console.log(response);
                        window.location.replace('https://liftovers-admin.herokuapp.com/')
                    }
                    if (response.status === 401) {
                        alert('Passwords do not match. Please try again');
                    }
                    // return response.json()})
                })
                .catch(err => {
                    console.log("fetch error" + err);
                });
        }


    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

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

        if (!fields["confpassword"]){
            formIsValid = false;
            errors["confpassword"] = "*Please re-enter your password"
        }

        if (fields["password"] !== fields["confpassword"]){
            formIsValid = false;
            errors["confpassword"] = "* Passwords do not match"
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
                                        <ClearLink to="/signup">Sign Up</ClearLink>
                                    </ClearButton>
                                </Grid>
                            </Boxed>
                        </Contain>
                    </Header>
                    <form id="myForm" onSubmit={this.passwordreset}>
                        <Boxed pad="50px">
                            <Form.Group row>
                                <h2 style={{marginLeft: '10px', color: '#5e5e5e' }}>Reset Password</h2>
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <div className="password">
                                    <Input
                                        type="text"
                                        label="Enter New Password"
                                        value={this.state.fields.password}
                                        onChange={this.update}
                                        name="password"
                                        required forminput
                                    />
                                </div>
                                <div className="errorMsg"  style={{ color: 'red' }}>{this.state.errors.email}</div>
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <div className="confpassword">
                                    <Input
                                        type="text"
                                        label="Confirm New Password"
                                        value={this.state.fields.confpassword}
                                        onChange={this.update}
                                        name="confpassword"
                                        required forminput
                                    />
                                </div>
                                <div className="errorMsg"  style={{ color: 'red' }}>{this.state.errors.email}</div>
                            </Form.Group>
                            <Form.Group row>
                                <Input type="submit" value="Submit" style={{ backgroundColor: '#00ffd9' }}/>
                            </Form.Group>
                        </Boxed>
                    </form>
                </Wrapper>
            </Layout>
        );
    };


}
export default Reset;
