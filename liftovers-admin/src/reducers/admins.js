import { SET_ADMINS } from "../constants";

export function setAdmins(state = {}, action) {
  switch (action.type) {
    case SET_ADMINS:
      return action.payload;
    default:
      return state;
  }
}
