import React, {Component} from "react";
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

class Login extends Component{

  constructor(props){
      super(props);

      this.state = {
          email: '',
          password: ''
      };

      this.update = this.update.bind(this)
      this.displayLogin = this.displayLogin


  }

  update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
		e.preventDefault();
		console.log('You are logged in');
		console.log(this.state);
		this.setState({
			email: '',
			password: ''
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
                  <ClearLink to="/">Home</ClearLink>
                  <ClearLink to="/signup">Sign Up</ClearLink>
                </Grid>
              </Boxed>
            </Contain>
          </Header>
          <Form  onSubmit={this.displayLogin}>
            <Form.Group row>
                <h2 style={{marginLeft: '140px', color: '#444' }}>Login to liftovers</h2>
            </Form.Group>
            <br />
            <Form.Group>
              <div className="username">
                <input
                  type="text"
                  placeholder="Username..."
                  value={this.state.email}
                  onChange={this.update}
                  name="email"
                  style={{marginLeft: '50px', width: "370px" , height: "30px"}}
                />
					    </div>
              <br />
            </Form.Group>
            <br />
            <Form.Group>
              <div className="password">
                <input
                  type="password"
                  placeholder="Password..."
                  value={this.state.password}
                  onChange={this.update}
                  name="password"
                  style={{marginLeft: '50px', width: "370px" , height: "30px"}}
                />
              </div>
            </Form.Group>
            <br />
            <Form.Group row>
              <input type="submit" value="Login" style={{marginLeft: '200px', color: 'blue' }}/>
            </Form.Group>
          </Form>
          <br />
          <ClearLink to="/signup" style={{marginLeft: '160px'}}>Create an account</ClearLink>
        </Wrapper>
      </Layout>
    );
  };

}
export default Login;
