import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Grid, Layout, Boxed } from "flexibull";
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

function Greeting() {
  const name = localStorage.getItem('currentUsername');
  if (name) {
    let splice = name.slice(1)
    const username = name[0] + splice.toLowerCase();
    return <Boxed pad="5px 10px">
    <Grid
        default="auto 100px 100px 140px"
        tablet="auto 100px 100px 140px"
        mobile="1fr"
        pad="10px"
      >
      <div>
        
          <h2 style={{marginLeft: '10px', color: '#5e5e5e' }}>Welcome {username}</h2>
      </div>
    </Grid>
    </Boxed>;
  }
  return <br />
}
function clearStorage(){
  localStorage.clear()
}

function LogInout(){
  let name = localStorage.getItem('currentUsername');
  if(name != null){
    if(name.length > 0){
      return <ClearButton>
          <ClearLink onClick={() => { clearStorage()}}  to="/login">Logout</ClearLink>
      </ClearButton>  
    }
  }
    return <div>
       <ClearButton>
            <ClearLink to="/login">Login</ClearLink>
        </ClearButton>
        <ClearButton>
            <ClearLink to="/signup">Sign Up</ClearLink>
        </ClearButton>
    </div> 
}

const Home = () => {
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
                <div>
                  <Grid
                    default="auto 100px 100px 140px"
                    tablet="auto 100px 100px 140px"
                    mobile="1fr"
                    pad="1px"
                    >
                    <ClearButton>
                        <ClearLink to= "/">Home</ClearLink>
                    </ClearButton>
                    <LogInout />
                    <ClearButton>
                        <ClearLink to="/about">About</ClearLink>
                    </ClearButton>
                  </Grid>
                </div>
              </Grid>
            </Boxed>
          </Contain>
        </Header>
          <div id="main-container">
              <Boxed pad="50px">
                <h2 style={{marginLeft: '1px', color: '#5e5e5e' }}>lifTOvers</h2><br/>
                <h3 style={{marginLeft: '1px', color: '#000000', fontSize: '12pt' }}>
                We are a dedicated team of volunteers working around the clock to lift food to<br/>
                those who need it most.
                </h3>
              </Boxed>
              <br/><br/>
              <div class="boxed">
                <img src ='https://pbs.twimg.com/media/D5rGcOKWkAYYnAP?format=jpg' width="800"></img>
              </div>
          </div>
        <Greeting />
      </Wrapper>
    </Layout>
  );
};


export default Home;

