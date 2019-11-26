import { Dashboard } from "./dashboard";
import { connect } from "react-redux";
import { getRequestedLifts, getPostedLifts, getProblemLifts } from "../../actions/lifts";


function mapStateToProps(state) {
  console.log(state)
  return {
    requestedLifts: state.requestedLifts,
    postedLifts: state.postedLifts,
    problemLifts: state.problemLifts,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRequestedLifts: params => dispatch(getRequestedLifts(params )),
    getPostedLifts: params => dispatch(getPostedLifts(params )),
    getProblemLifts: params => dispatch(getProblemLifts(params )),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
