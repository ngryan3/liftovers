import React, {Component} from "react";
import { Grid, Layout, Boxed, Input } from "flexibull";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {
    Header,
    Contain,
    ClearButton,
    Wrapper,
    Square,
    ClearLink
} from "../../../components/styles";
import Logo from "../../../assets/liftovers.jpg";
import ApiUrl from "../../../api/config";
import styled from "styled-components";
const LogoHolder = styled.img`
  height: 100px !important;
`;


class Forgot extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            fields: {},
            errors: {}
        };

        this.update = this.update.bind(this);
        this.checkemail = this.checkemail.bind(this);


    }

    update(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }


    checkemail(e) {
        e.preventDefault();
        let myForm = document.getElementById('myForm');
        const data = new FormData(myForm);
        var object = {};
        data.forEach(function(value, key) {
            object[key] = value;
        });
        var json = JSON.stringify(object);
        console.log(json);

        fetch(ApiUrl +"/forgot", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: json, // JSON.stringify
        })
            .then(response => {
                if (response.status === 400) {
                    alert('Email does not exist in our database, please recheck and try again');
                }
                if (response.status === 300) {
                    alert('Check your email');
                }
                // return response.json()})
            })
            .catch(err => {
                console.log("fetch error" + err);
            });

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
                    <form id="myForm" onSubmit={this.checkemail}>
                        <Boxed pad="50px">
                            <Form.Group row>
                                <h2 style={{marginLeft: '10px', color: '#5e5e5e' }}>Forgot Password</h2>
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <div className="username">
                                    <Input
                                        type="text"
                                        label="Username/Email"
                                        value={this.state.fields.email}
                                        onChange={this.update}
                                        name="email"
                                        required forminput
                                    />
                                </div>
                                <div className="errorMsg"  style={{ color: 'red' }}>{this.state.errors.email}</div>
                            </Form.Group>
                            <br />
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
export default Forgot;
