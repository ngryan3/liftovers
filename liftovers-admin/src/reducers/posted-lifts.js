import { SET_POSTED_LIFTS } from "../constants";

export function setPostedLifts(state = {}, action) {
    switch (action.type) {
      case SET_POSTED_LIFTS:
        return action.payload;
      default:
        return state;
    }
}