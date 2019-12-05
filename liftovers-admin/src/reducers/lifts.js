import { SET_LIFTS } from "../constants";
import { SET_REQUESTED_LIFTS } from "../constants";
import { SET_POSTED_LIFTS } from "../constants";
import { SET_PROBLEM_LIFTS } from "../constants";
import { SET_ONGOING_LIFTS } from "../constants";


export function setLifts(state = {}, action) {
  switch (action.type) {
    case SET_LIFTS:
      return action.payload;
    default:
      return state;
  }
}

export function setRequestedLifts(state = {}, action) {
  switch (action.type) {
    case SET_REQUESTED_LIFTS:
      return action.payload;
    default:
      return state;
  }
}

export function setPostedLifts(state = {}, action) {
  switch (action.type) {
    case SET_POSTED_LIFTS:
      return action.payload;
    default:
      return state;
  }
}

export function setProblemLifts(state = {}, action) {
  switch (action.type) {
    case SET_PROBLEM_LIFTS:
      return action.payload;
    default:
      return state;
  }
}

export function setOngoingLifts(state = {}, action) {
  switch (action.type) {
    case SET_ONGOING_LIFTS:
      return action.payload;
    default:
      return state;
  }
}