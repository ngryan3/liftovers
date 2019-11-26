import { combineReducers } from "redux";
import { setVolunteers } from "./volunteers";
import { setLifts, setRequestedLifts, setPostedLifts, setProblemLifts } from "./lifts"
import { setLoader } from "./auxilliary";
// import { setRequestedLifts } from "./requested-lifts";
// import { setPostedLifts } from "./posted-lifts";
import { setAdmins } from "./admins";
import { setDonors } from "./donors";
import { setProviders } from "./providers";

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */
const allReducers = combineReducers({
  volunteers: setVolunteers,
  lifts: setLifts,
  admins: setAdmins,
  donors: setDonors,
  providers: setProviders,
  requestedLifts: setRequestedLifts,
  postedLifts: setPostedLifts,
  problemLifts: setProblemLifts,
  loading: setLoader
});

export default allReducers;
