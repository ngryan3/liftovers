import axios from "axios";
import ApiUrl from "../api/config";
import { toggleLoader } from "./auxilliary";
import { SET_DONORS } from "../constants";

export function setDonors(donors) {
  return {
    type: SET_DONORS,
    payload: donors
  };
}

export function getDonors(params) {
  console.log(params);
  return function(dispatch) {
    dispatch(toggleLoader(true));
    return axios.get(`${ApiUrl}/donor`, { params }).then(({ data }) => {
      dispatch(toggleLoader(false));
      dispatch(setDonors(data));
    });
  };
}
