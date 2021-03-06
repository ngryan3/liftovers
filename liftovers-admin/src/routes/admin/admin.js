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
  ModalComponent
} from "flexibull";
import { Theme } from "flexibull/build/theme";
import styled from "styled-components";
import { isAdmin, isSuperAdmin } from "../../actions/admin"
import { isVolunteer } from "../../actions/volunteer"

export const PageTitle = styled.h3`
  color: ${Theme.PrimaryFontColor};
  margin: 0;
  padding: 10px 0;
`;
const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Surname", dataIndex: "surname", key: "surname"},
  { title: "Phone", dataIndex: "phone", key: "phone" },
  { title: "Role", dataIndex: "role", key: "role" },
  { title: "Email", dataIndex: "email", key: "email"},
  {
      header: '',
      accessor: "_id",
      dataIndex: "_id",
      id: 'view-button',
      render: accessor => (<Button>
                              <a href={"/admins/view/" + accessor}>
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
                              <a href={"/admins/edit/" + accessor}>
                                  Edit
                              </a>
                           </Button>)
      }
];

const super_columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Surname", dataIndex: "surname", key: "surname"},
  { title: "Phone", dataIndex: "phone", key: "phone" },
  { title: "Role", dataIndex: "role", key: "role" },
  { title: "Email", dataIndex: "email", key: "email"},
  {
      header: '',
      accessor: "_id",
      dataIndex: "_id",
      id: 'view-button',
      render: accessor => (<Button>
                              <a href={"/admins/view/" + accessor}>
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
                              <a href={"/admins/edit/" + accessor}>
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
                                    <a href={"/admins/delete/" + accessor}>
                                        Delete
                                    </a>
                                  </Button>)}
];

const pageOptions = [
  { value: 10, label: "10 Rows" },
  { value: 20, label: "20 Rows" },
  { value: 50, label: "50 Rows" },
  { value: 100, label: "100 Rows" }
];

export const Admin = ({ getAdmins, admins, loading }) => {
  useEffect(() => {
    getAdmins({ page: 1, limit: 10 });
  }, []);
  console.log(admins);
  let { docs, totalDocs, page } = admins;

  let display_columns;
  if (isSuperAdmin()) {
    display_columns = super_columns;
  } else {
    display_columns = columns;
  }

  return (
    <div data-test="admin">
      <Boxed pad="5px 0">
        <PageTitle data-test="title">Administrators</PageTitle>
      </Boxed>
      { isVolunteer() && <Boxed>
                      You do not have access to this page!
                  </Boxed> }
      { isAdmin() && <Boxed>
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
            <Boxed pad="0.2rem 0 0.2rem 0.15rem" />
          </Grid>
          <Grid default="100%" tablet="100%" mobile="100%">
            <Boxed pad="0.2rem" align="right">
              <Button iconLeft>
                <i className="icon-user-add" />
                <a href="./admins/create">Create Administrator</a>
              </Button>
            </Boxed>
          </Grid>
        </Grid>
      </Boxed> }
      { isAdmin() && <Boxed>
        {loading ? (
          <Loader />
        ) : (
          <FlexiTable columns={display_columns} data={docs || []}>
            <FlexiPagination
              total={totalDocs}
              onChange={page => getAdmins({ page, limit: 10 })}
              current={page}
              pageCounts={pageOptions}
              pageSize={10}
              showTotal={(total, range) => {
                return `${range[0]} - ${range[1]} of ${total} items`;
              }}
            />
          </FlexiTable>
        )}
      </Boxed> }
    </div>
  );
};
