import { Dashboard } from "./dashboard";
import { connect } from "react-redux";
import { getLifts } from "../../actions/lifts";
function mapStateToProps(state) {
  return {
    lifts: state.lifts,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getLifts: params => dispatch(getLifts(params ))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);


// export default Dashboard;