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
    return axios.get(`${ApiUrl}/admins`, { params }).then(({ data }) => {
      dispatch(toggleLoader(false));
      dispatch(setAdmins(data));
    });
  };
}
