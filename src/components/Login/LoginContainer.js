import { connect } from 'react-redux'; 
import LoginView from './LoginView';
import { login } from '../../store/session/actions';

const mapStateToProps = (state) => {
  return {
    isLoading: state.session.auth.sending,
    errorStatusCode: state.session.auth.error && state.session.auth.error.response && state.session.auth.error.response.status, 
    isLogged: state.session.auth.isLogged,
  }
}; 
const mapDispatchToProps = (dispatch) => {
  return {
    execLogin: (username, password) => dispatch(login.request({username, password}))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginView); 