import { SET_PROVIDERS } from "../constants";

export function setProviders(state = {}, action) {
  switch (action.type) {
    case SET_PROVIDERS:
      return action.payload;
    default:
      return state;
  }
}
