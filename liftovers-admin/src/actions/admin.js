import axios from "axios";
import ApiUrl from "../api/config";
import { toggleLoader } from "./auxilliary";
import { SET_ADMINS } from "../constants";

export function setAdmins(admins) {
  return {
    type: SET_ADMINS,
    payload: admins
  };
}

export function getAdmins(params) {
  console.log(params);
  return function(dispatch) {
    dispatch(toggleLoader(true));
    return axios.get(`${ApiUrl}/user`, { params }).then(({ data }) => {
      dispatch(toggleLoader(false));
      dispatch(setAdmins(data));
    });
  };
}

export function isAdmin() {
    const userRole = localStorage.getItem('currentUserRole');
    if (userRole == "admin" || userRole == "superAdmin"){
        return true
    }
        return false
}

export function isSuperAdmin() {
    const userRole = localStorage.getItem('currentUserRole');
    if (userRole == "superAdmin") {
        return true;
    }
        return false;
}