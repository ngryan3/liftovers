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
import Abu from "../../assets/abu.jpg";
import Ali from "../../assets/ali.png";
import Shiva from "../../assets/shiva.png";
import Trisha from "../../assets/trisha.png";
const LogoHolder = styled.img`
  height: 100px !important;
`;

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

class About extends React.Component {

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
                    <LogInout />
                    <ClearButton>
                      <ClearLink to="/dashboard">Dashboard</ClearLink>
                    </ClearButton>
                  </Grid>
                </Boxed>
              </Contain>
            </Header>
            <div id="main-container">
              <Boxed pad="50px">
                <h2 style={{marginLeft: '1px', color: '#5e5e5e' }}>About Us</h2><br/>
                <h3 style={{marginLeft: '1px', color: '#000000', fontSize: '12pt' }}>
                  lifTOvers is a grassroots initiative with a vision to end food waste in Toronto<br/>
                  within our lifetime.<br/><br/>
                  We are working around the clock to lift food to those who need it most.
                </h3>
                <br/><br/><br/>
                <h2 style={{marginLeft: '1px', color: '#5e5e5e'}}>Our Team</h2>
                <br/><br/>
                <div class="row">
                  <img src={Shiva} width='150' height='150' />
                  <div>Shiva Mazrouei<br/>Co-Founder</div>
                  <img src={Trisha} width='150' height='150' />
                  <div>Trisha Islam<br/>Co-Founder</div>
                  <img src={Ali} width='150' height='150' />
                  <div>Mohammad Ali<br/>Digital Project Manager</div>
                  <img src={Abu} width='150' height='150' />
                  <div>Abubakar Sambo<br/>Software Development Manager</div>
                </div>
              </Boxed>
            </div>
          </Wrapper>
        </Layout>
      );
    }
};
export default About;

