import axios from "axios";
import ApiUrl from "../api/config";
import { toggleLoader } from "./auxilliary";
import { SET_VOLUNTEERS } from "../constants";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import {render} from 'react-dom';
import {
  Button
} from "flexibull";

export function setVolunteers(volunteers) {
  return {
    type: SET_VOLUNTEERS,
    payload: volunteers
  };
}

export function getVolunteers(params) {
  console.log(params);
  return function(dispatch) {
    dispatch(toggleLoader(true));
    return axios.get(`${ApiUrl}/volunteer`, { params }).then(({ data }) => {
      dispatch(toggleLoader(false));
      dispatch(setVolunteers(data));
      console.log(data);
    })
    .catch (function (error) {
        console.log(error);
    });
  };
}
