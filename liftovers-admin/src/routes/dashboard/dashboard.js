import React, { useEffect } from "react";
import { 
    Grid, 
    Boxed,  
    Loader,
    FlexiTable,
    FlexiPagination, } from "flexibull";
import { Accordion, Card, Button, ControlLabel } from "react-bootstrap";
import {
    Header,
    Contain,
    ClearButton,
    Wrapper,
    Square
} from "../../components/styles";
import { AdminLayout } from "../../components//admin";
import { Theme } from "flexibull/build/theme";
import styled from "styled-components";

export const PageTitle = styled.h3`
  color: ${Theme.PrimaryFontColor};
  margin: 0;
  padding: 10px 0;
`;

const pageOptions = [
    { value: 10, label: "10 Rows" },
    { value: 20, label: "20 Rows" },
    { value: 50, label: "50 Rows" },
    { value: 100, label: "100 Rows" }
  ];

const columns = [
    { title: "Postal Code", dataIndex: "origin", key: "origin" },
];


export const Dashboard = ({getLifts, lifts, loading}) => {
    useEffect(() => {}, []);
    let { docs, totalDocs, page } = lifts;
    return (
        <AdminLayout>
            <Wrapper>
                <Square />
                <Header>
                    <Contain width="1200px">
                        <Boxed pad="5px 10px" align="right">
                            <Grid
                                default="100%" tablet="100%" mobile="100%"
                                pad="10px"
                            >
                                <div>
                                    <ClearButton>Sign Out</ClearButton>
                                </div>

                            </Grid>
                        </Boxed>
                    </Contain>
                </Header>

                <Boxed pad="5px 0">
                    <PageTitle data-test="title">Lifts: Awaiting Approval</PageTitle>
                </Boxed>

                <Boxed>
                    {loading ? (
                        <Loader />
                    ) : (
                            <FlexiTable columns={columns} data={docs || []}>
                                <FlexiPagination
                                    total={totalDocs}
                                    onChange={page => getLifts({ page, limit: 10 })}
                                    current={page}
                                    pageCounts={pageOptions}
                                    pageSize={10}
                                    showTotal={(total, range) => {
                                        return `${range[0]} - ${range[1]} of ${total} items`;
                                    }}
                                />
                            </FlexiTable>
                        )}
                </Boxed>

                <Boxed pad="5px 0">
                    <PageTitle data-test="title">Lifts: Issues Found</PageTitle>
                </Boxed>

                <Boxed pad="5px 0">
                    <PageTitle data-test="title">Lifts: Posted</PageTitle>
                </Boxed>


                <Boxed pad="5px 0">
                    <PageTitle data-test="title">Volunteers Needing Approval</PageTitle>
                </Boxed>
            </Wrapper>
        </AdminLayout>
    );
};

// export default Dashboard;