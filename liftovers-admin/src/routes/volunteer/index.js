import { Volunteer } from "./volunteer";
// import { CreateVolunteer } from "./volunteer/create"
import { connect } from "react-redux";
import { getVolunteers } from "../../actions/volunteer";
function mapStateToProps(state) {
  return {
    volunteers: state.volunteers,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVolunteers: params => dispatch(getVolunteers(params))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Volunteer);
