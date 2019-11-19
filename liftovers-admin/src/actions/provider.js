import axios from "axios";
import ApiUrl from "../api/config";
import { toggleLoader } from "./auxilliary";
import { SET_PROVIDERS } from "../constants";

export function setProvider(providers) {
  return {
    type: SET_PROVIDERS,
    payload: providers
  };
}

export function getProviders(params) {
  console.log(params);
  return function(dispatch) {
    dispatch(toggleLoader(true));
    return axios.get(`${ApiUrl}/provider`, { params }).then(({ data }) => {
      dispatch(toggleLoader(false));
      dispatch(setProvider(data));
    });
  };
}
