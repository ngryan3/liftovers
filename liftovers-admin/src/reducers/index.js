import { combineReducers } from "redux";
import { setVolunteers } from "./volunteers";
import { setLifts } from "./lifts"
import { setLoader } from "./auxilliary";
import { setAdmins } from "./admins";

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */
const allReducers = combineReducers({
  volunteers: setVolunteers,
  loading: setLoader,
  admins: setAdmins,
  lifts: setLifts
});

export default allReducers;
