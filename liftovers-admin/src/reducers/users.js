import { SET_UNAPPROVED_USERS } from "../constants";

export function setUnapprovedUsers(state = {}, action) {
  switch (action.type) {
    case SET_UNAPPROVED_USERS:
      return action.payload;
    default:
      return state;
  }
}
