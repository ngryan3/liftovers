import React from "react";
import { Grid, Layout, Boxed } from "flexibull";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {
  Header,
  Contain,
  ClearLink,
  ClearButton,
  Wrapper,
  Square
} from "../../components/styles";
import Logo from "../../assets/liftovers.jpg";
import styled from "styled-components";
const LogoHolder = styled.img`
  height: 100px !important;
`;

const Login = () => {
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
                <ClearButton>Sign in</ClearButton>
              </Grid>
            </Boxed>
          </Contain>
        </Header>
        <Form>
          <Form.Group row>
            <label  style={{marginLeft: '50px'}} >Please fill out the information below</label>
          </Form.Group>
          <br />
          <Form.Group>
            <label style={{marginLeft: '10px'}}>
              First Name:
                <input style={{marginLeft: '30px'}}  size="lg" type="text" name="fname" />
            </label>
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
              <input style={{marginLeft: '1px'}} type="text" name="num" />
            </label>
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
              <input  style={{marginLeft: '8px'}} type="text" name="addr" />
            </label> <br />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <br />
          <br />
          <Form.Group row>
            <label  style={{marginLeft: '10px'}}>
              Password:
              <input  style={{marginLeft: '40px'}} type="text" name="pass" />
            </label>
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
          <Button  style={{marginLeft: '10px'}} variant="primary" type="signup">
            Sign Up
          </Button>
          </Form.Group>
        </Form>
      </Wrapper>
    </Layout>
  );
};

export default Login;
