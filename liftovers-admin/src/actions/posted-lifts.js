import axios from "axios";
import ApiUrl from "../api/config";
import { toggleLoader } from "./auxilliary";
import { SET_POSTED_LIFTS } from "../constants";


export function setPostedLifts(requestedLifts) {
  return {
    type: SET_POSTED_LIFTS,
    payload: requestedLifts
  };
}

export function getPostedLifts(params) {
  console.log(params);
  return function(dispatch) {
    dispatch(toggleLoader(true));
    return axios.get(`${ApiUrl}/lifts`, { params }).then(({ data }) => {
      dispatch(toggleLoader(false));
      dispatch(setPostedLifts(data));
      console.log(data);
    });
  };
}
