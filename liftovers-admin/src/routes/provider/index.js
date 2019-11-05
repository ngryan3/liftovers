import { Provider } from "./provider";
import { connect } from "react-redux";
import { getProviders } from "../../actions/provider";
function mapStateToProps(state) {
  return {
    providers: state.providers,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProviders: params => dispatch(getProviders(params))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Provider);
