import axios from "axios";
import ApiUrl from "../api/config";
import { toggleLoader } from "./auxilliary";
import { SET_UNAPPROVED_USERS } from "../constants";

export function setUnapprovedUsers(unapprovedUsers) {
    return {
      type: SET_UNAPPROVED_USERS,
      payload: unapprovedUsers
    };
  }
  
  
export function getUnapprovedUsers(params) {
    console.log(params);
    return function(dispatch) {
    dispatch(toggleLoader(true));
    return axios.get(`${ApiUrl}/user/waiting-approval`, { params  }).then(({ data }) => {
        dispatch(toggleLoader(false));
        dispatch(setUnapprovedUsers(data));
        console.log(data);
        });
        };
    }