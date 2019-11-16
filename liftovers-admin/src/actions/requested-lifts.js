import axios from "axios";
import ApiUrl from "../api/config";
import { toggleLoader } from "./auxilliary";
import { SET_REQUESTED_LIFTS } from "../constants";


export function setRequestedLifts(requestedLifts) {
  return {
    type: SET_REQUESTED_LIFTS,
    payload: requestedLifts
  };
}

export function getRequestedLifts(params) {
  console.log(params);
  return function(dispatch) {
    dispatch(toggleLoader(true));
    return axios.get(`${ApiUrl}/lifts/requested`, { params }).then(({ data }) => {
      dispatch(toggleLoader(false));
      dispatch(setRequestedLifts(data));
      console.log(data);
    });
  };
}
