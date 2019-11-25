import { Donor } from "./donor";
import { connect } from "react-redux";
import { getDonors } from "../../actions/donor";
function mapStateToProps(state) {
  return {
    donors: state.donors,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDonors: params => dispatch(getDonors(params))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Donor);
