import axios from "axios";
import ApiUrl from "../api/config";
import { toggleLoader } from "./auxilliary";
import { SET_LIFTS } from "../constants";

export function setLifts(lifts) {
  return {
    type: SET_LIFTS,
    payload: lifts
  };
}


export function getLifts(params) {
  console.log(params);
  return function(dispatch) {
    dispatch(toggleLoader(true));
    return axios.get(`${ApiUrl}/lifts`, { params : {status: "requested"} }).then(({ data }) => {
      dispatch(toggleLoader(false));
      dispatch(setLifts(data));
      console.log(data);
    });
  };
}
