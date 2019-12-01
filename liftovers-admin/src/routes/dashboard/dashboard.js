import React, { useEffect } from "react";
import {
    Grid,
    Boxed,
    Loader,
    FlexiTable,
    FlexiPagination,
    Button
} from "flexibull";
import {
    Header,
    Contain,
    ClearButton,
    Wrapper,
    Square
} from "../../components/styles";
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

const buttonColumns = [
    { title: "First Name", dataIndex: "firstName", key: "firstName" },
    { title: "Last Name", dataIndex: "lastName", key: "lastName" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Pickup Address", dataIndex: "address", key: "address" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Serve Time", dataIndex: "serveTime", key: "serveTime" },
    { title: "Pickup Time", dataIndex: "pickupTime", key: "pickupTime" },
    { title: "Description", dataIndex: "description", key: "description" },
    {
        header: '',
        id: 'approve-button',
        render: ({ row }) => (<Button onClick={(e) => this.handleButtonClick(e, row)}>Approve</Button>)
    },

];

const columns = [
    { title: "First Name", dataIndex: "firstName", key: "firstName" },
    { title: "Last Name", dataIndex: "lastName", key: "lastName" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Pickup Address", dataIndex: "address", key: "address" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Serve Time", dataIndex: "serveTime", key: "serveTime" },
    { title: "Pickup Time", dataIndex: "pickupTime", key: "pickupTime" },
    { title: "Description", dataIndex: "description", key: "description" },

];

const userColumns = [
    { title: "First Name", dataIndex: "name", key: "name" },
    { title: "Last Name", dataIndex: "surname", key: "surname" },
    { title: "Role", dataIndex: "role", key: "role" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    {   
        header: '',
        id: 'approve-button',
        render: ({ row }) => (<Button onClick={(e) => this.handleButtonClick(e, row)}>Approve</Button>)
    },
    {   
        header: '',
        id: 'reject-button',
        render: ({ row }) => (<Button onClick={(e) => this.handleButtonClick(e, row)}>Reject</Button>)
    },
]


export const Dashboard = ({ getRequestedLifts, getPostedLifts, 
    postedLifts, requestedLifts, getProblemLifts, problemLifts, 
    unapprovedUsers, getUnapprovedUsers, loading }) => {
    useEffect(() => {
        getRequestedLifts({ page: 1, limit: 10 });
        getPostedLifts({ page: 1, limit: 10 });
        getProblemLifts({ page: 1, limit: 10 });
        getUnapprovedUsers({ page: 1, limit: 10 });
      }, []);
    let { docs, totalDocs, page } = requestedLifts;
    let { docs:secondDocs, totalDocs:secondTotalDocs, page:secondPage } =  postedLifts;
    let { docs:thirdDocs, totalDocs:thirdTotalDocs, page:thirdPage } =  problemLifts;
    let { docs:fourthDocs, totalDocs:fourthTotalDocs, page:fourthPage } =  unapprovedUsers;


    return (
        <div data-test="lift">
            <Boxed>
                <Grid
                    default="50% 50%"
                    tablet="60% 40%"
                    mobile="100%"
                    padHorizontal="0"
                >
                    
                    <Grid default="100%" tablet="100%" mobile="100%">
                        <Boxed pad="0.2rem" align="right">
                        </Boxed>
                    </Grid>
                </Grid>
            </Boxed>
            <Boxed pad="5px 0">
                <PageTitle data-test="title">Lifts: Awaiting Approval</PageTitle>
            </Boxed>
            <Boxed>
                {loading ? (
                    <Loader />
                ) : (
                        <FlexiTable columns={buttonColumns} data={docs || []}>
                            <FlexiPagination
                                total={totalDocs}
                                onChange={page => getRequestedLifts({ page, limit: 10 })}
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
            <Boxed>
                {loading ? (
                    <Loader />
                ) : (
                        <FlexiTable columns={columns} data={thirdDocs || []}>
                            <FlexiPagination
                                total={thirdTotalDocs}
                                onChange={thirdPage => getProblemLifts({ thirdPage, limit: 10 })}
                                current={thirdPage}
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
                <PageTitle data-test="title">Users Awaiting Approval</PageTitle>
            </Boxed>
            <Boxed>
                {loading ? (
                    <Loader />
                ) : (
                        <FlexiTable columns={userColumns} data={fourthDocs || []}>
                            <FlexiPagination
                                total={fourthTotalDocs}
                                onChange={fourthPage => getUnapprovedUsers({ fourthPage, limit: 10 })}
                                current={fourthPage}
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
                <PageTitle data-test="title">Lifts: Posted</PageTitle>
            </Boxed>
            <Boxed>
                {loading ? (
                    <Loader />
                ) : (
                        <FlexiTable columns={columns} data={secondDocs || []}>
                            <FlexiPagination
                                total={secondTotalDocs}
                                onChange={secondPage => getPostedLifts({ secondPage, limit: 10 })}
                                current={secondPage}
                                pageCounts={pageOptions}
                                pageSize={10}
                                showTotal={(total, range) => {
                                    return `${range[0]} - ${range[1]} of ${total} items`;
                                }}
                            />
                        </FlexiTable>
                    )}
            </Boxed>

        </div>

    );
};

// export default Dashboard;