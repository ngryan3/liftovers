import React, { useEffect } from "react";
import {
  Loader,
  FlexiTable,
  FlexiPagination,
  Boxed,
  Grid,
  Input,
  Button,
  PaleButton,
} from "flexibull";
import { Theme } from "flexibull/build/theme";
import styled from "styled-components";

export const PageTitle = styled.h3`
  color: ${Theme.PrimaryFontColor};
  margin: 0;
  padding: 10px 0;
`;
const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Surname", dataIndex: "surname", key: "surname"},
  { title: "Phone", dataIndex: "phone", key: "phone" },
  { title: "Postal Code", dataIndex: "postalCode", key: "postalCode" },
  { title: "Email", dataIndex: "email", key: "email"},
  {
    header: '',
    accessor: "_id",
    dataIndex: "_id",
    id: 'view-button',
    render: accessor => (<Button>
                            <a href={"/volunteers/view/" + accessor}>
                                View
                            </a>
                         </Button>)
    },
  {
    header: '',
    accessor: "_id",
    dataIndex: "_id",
    id: 'edit-button',
    render: accessor => (<Button style={{background:"#A6CBFF"}}>
                            <a href={"/volunteers/edit/" + accessor}>
                                Edit
                            </a>
                         </Button>)
    },
  {
    header: '',
    accessor: "_id",
    dataIndex: "_id",
    id: 'delete-button',
    render: accessor => (<Button style={{background:"#FF8C83"}}>
                            <a href={"/volunteers/delete/" + accessor}>
                                Delete
                            </a>
                          </Button>)
  }
];
const pageOptions = [
  { value: 10, label: "10 Rows" },
  { value: 20, label: "20 Rows" },
  { value: 50, label: "50 Rows" },
  { value: 100, label: "100 Rows" }
];

export const Volunteer = ({ getVolunteers, volunteers, loading }) => {
  useEffect(() => {
    getVolunteers({ page: 1, limit: 10 });
  }, []);
  let { docs, totalDocs, page } = volunteers;
  return (
    <div data-test="volunteer">
      <Boxed pad="5px 0">
        <PageTitle data-test="title">Volunteers</PageTitle>
      </Boxed>
      <Boxed>
        <Grid
          default="50% 50%"
          tablet="60% 40%"
          mobile="100%"
          padHorizontal="0"
        >
          <Grid
            default="65% 35%"
            tablet="65% 35%"
            mobile="60% 40%"
            padHorizontal="0"
          >
            <Boxed pad="0.2rem 0.15rem 0.2rem 0">
              <Input type="search" />
            </Boxed>
            <Boxed pad="0.2rem 0 0.2rem 0.15rem" />
          </Grid>
          <Grid default="100%" tablet="100%" mobile="100%">
            <Boxed pad="0.2rem" align="right">
              <Button iconLeft>
                <i className="icon-user-add" />
                <a href="./volunteers/create">Create Volunteer</a>
              </Button>
            </Boxed>
          </Grid>
        </Grid>
      </Boxed>
      <Boxed>
        {loading ? (
          <Loader />
        ) : (
          <FlexiTable id="volunteers-table" columns={columns} data={docs || []}>
            <FlexiPagination
              total={totalDocs}
              onChange={page => getVolunteers({ page, limit: 10 })}
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
    </div>
  );
};
