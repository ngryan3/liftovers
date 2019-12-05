import { Dashboard } from "./dashboard";
import { connect } from "react-redux";
import { getRequestedLifts, getPostedLifts, getProblemLifts, getOngoingLifts, getMyLifts} from "../../actions/lifts";
import { getUnapprovedUsers } from "../../actions/users";

function mapStateToProps(state) {
  console.log(state)
  return {
    requestedLifts: state.requestedLifts,
    postedLifts: state.postedLifts,
    problemLifts: state.problemLifts,
    unapprovedUsers: state.unapprovedUsers,
    ongoingLifts: state.ongoingLifts,
    myLifts: state.myLifts,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRequestedLifts: params => dispatch(getRequestedLifts(params )),
    getPostedLifts: params => dispatch(getPostedLifts(params )),
    getProblemLifts: params => dispatch(getProblemLifts(params )),
    getUnapprovedUsers: params => dispatch(getUnapprovedUsers(params )),
    getOngoingLifts: params => dispatch(getOngoingLifts(params )),
    getMyLifts: params => dispatch(getMyLifts(params )),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
