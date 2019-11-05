import { Admin } from "./admin";
import { connect } from "react-redux";
import { getAdmins } from "../../actions/admin";
function mapStateToProps(state) {
  return {
    admins: state.admins,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAdmins: params => dispatch(getAdmins(params))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
