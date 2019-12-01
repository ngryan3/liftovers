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
} from "../../components/styles";
import Logo from "../../assets/liftovers.jpg";
import styled from "styled-components";
const LogoHolder = styled.img`
  height: 100px !important;
`;

class Login extends React.Component{

  constructor(props){
      super(props);

      this.state = {
          fields: {},
          errors: {}
      };

      this.update = this.update.bind(this);
      this.attemptLogin = this.attemptLogin.bind(this)


  }

  update(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
	}

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your Username/Email.";
    }
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your Password.";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;

  }

  attemptLogin(e) {
		e.preventDefault()
    if (this.validateForm() | true) {   
      //TODO: PUSH TO SERVER
      localStorage.setItem('currentUserEmail', this.state.fields["email"])
      let myForm = document.getElementById('myForm');
      const data = new FormData(myForm);

      var object = {};
      data.forEach(function(value, key) {
        object[key] = value;
      });
      var json = JSON.stringify(object);
      console.log(json);

      fetch("http://localhost:7000/user/login", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: json, // JSON.stringify
      })
          .then(response => {
            if (response.status === 400){
                alert('Email does not exist in our database, please recheck and try again');
            } if (response.status === 500){
                alert('Username and password do not match our records');
            }if (response.status === 300){
              window.location.replace('http://localhost:3000')
            } 
            return response.json()})
          .then(data => {
            localStorage.setItem('currentUser', data.item[0])
            localStorage.setItem('currentUserID', data.item[0]._id)
            localStorage.setItem('currentUsername', data.item[0].name)
          })
          .catch(err => {
              console.log("fetch error" + err);
          });

    }
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
          <form id="myForm" onSubmit={this.displayLogin}>
          <Boxed pad="50px">
            <Form.Group row>
                <h2 style={{marginLeft: '10px', color: '#5e5e5e' }}>Login to liftovers</h2>
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
            <Form.Group>
              <div className="password">
                <Input
                  type="password"
                  label="Password"
                  value={this.state.fields.password}
                  onChange={this.update}
                  name="password"
                  required forminput
                />
              </div>
              <div className="errorMsg"  style={{ color: 'red' }}>{this.state.errors.password}</div>
            </Form.Group>
            <br />
            <Form.Group row>
              <Input type="submit" value="Login" style={{ backgroundColor: '#00ffd9' }} onClick={this.attemptLogin}/>
            </Form.Group>
            <ClearLink to="/signup" style={{marginLeft: '160px'}}>Create an account</ClearLink>
              <br/>
            <ClearLink to="/forgot" style={{marginLeft: '160px'}}>Forgot Password</ClearLink>
            </Boxed>
          </form>
        </Wrapper>
      </Layout>
    );
  };

}
export default Login;
