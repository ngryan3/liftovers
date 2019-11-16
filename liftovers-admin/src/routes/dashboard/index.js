import { Dashboard } from "./dashboard";
import { connect } from "react-redux";
import { getRequestedLifts } from "../../actions/requested-lifts";
import { getPostedLifts } from "../../actions/posted-lifts";
import { getLifts } from "../../actions/lifts";

function mapStateToProps(state) {
  return {
    requestedLifts: state.requestedLifts,
    postedLifts: state.postedLifts,
    lifts: state.lifts,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRequestedLifts: params => dispatch(getRequestedLifts(params )),
    getPostedLifts: params => dispatch(getPostedLifts(params )),
    getLifts: params => dispatch(getLifts(params ))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);


// export default Dashboard;