import axios from "axios";
import ApiUrl from "../api/config";
import { toggleLoader } from "./auxilliary";
import { SET_LIFTS } from "../constants";
import { SET_REQUESTED_LIFTS } from "../constants";
import { SET_POSTED_LIFTS } from "../constants";
import { SET_PROBLEM_LIFTS } from "../constants";

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

export function setPostedLifts(postedLifts) {
  return {
    type: SET_POSTED_LIFTS,
    payload: postedLifts
  };
}

export function getPostedLifts(params) {
  console.log(params);
  return function(dispatch) {
    dispatch(toggleLoader(true));
    return axios.get(`${ApiUrl}/lifts/posted`, { params }).then(({ data }) => {
      dispatch(toggleLoader(false));
      dispatch(setPostedLifts(data));
      console.log(data);
    });
  };
}

export function setProblemLifts(problemLifts) {
  return {
    type: SET_PROBLEM_LIFTS,
    payload: problemLifts
  };
}

export function getProblemLifts(params) {
  console.log(params);
  return function(dispatch) {
    dispatch(toggleLoader(true));
    return axios.get(`${ApiUrl}/lifts/problem`, { params }).then(({ data }) => {
      dispatch(toggleLoader(false));
      dispatch(setProblemLifts(data));
      console.log(data);
    });
  };
}

export function handleClick () {
  axios.post('https://api.github.com/users/maecapozzi')
    .then(response => console.log(response))
}