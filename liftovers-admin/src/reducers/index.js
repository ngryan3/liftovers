import { combineReducers } from "redux";
import { setVolunteers } from "./volunteers";
import { setLifts } from "./lifts"
import { setLoader } from "./auxilliary";
import { setRequestedLifts } from "./requested-lifts";
import { setPostedLifts } from "./posted-lifts";
import { setAdmins } from "./admins";

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */
const allReducers = combineReducers({
  volunteers: setVolunteers,
  lifts: setLifts,
  admins: setAdmins,
  requestedLifts: setRequestedLifts,
  postedLifts: setPostedLifts,
  loading: setLoader
});

export default allReducers;
