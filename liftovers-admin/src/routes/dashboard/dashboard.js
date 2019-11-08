import React from "react";
import { Grid, Layout, Boxed } from "flexibull";
import { Accordion, Card, Button, ControlLabel } from "react-bootstrap";
import {
    Header,
    Contain,
    ClearButton,
    Wrapper,
    Square
} from "../../components/styles";
import Logo from "../../assets/liftovers.jpg";
import styled from "styled-components";
const LogoHolder = styled.img`
  height: 100px !important;
`;


const Dashboard = () => {
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
                                <ClearButton>Sign Out</ClearButton>
                            </Grid>
                        </Boxed>
                    </Contain>
                </Header>

                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Lifts Needing Approval
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Lifts With Issues
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Wrapper>
        </Layout>
    );
};

export default Dashboard;