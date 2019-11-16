import { SET_REQUESTED_LIFTS } from "../constants";

export function setRequestedLifts(state = {}, action) {
    switch (action.type) {
      case SET_REQUESTED_LIFTS:
        return action.payload;
      default:
        return state;
    }
}