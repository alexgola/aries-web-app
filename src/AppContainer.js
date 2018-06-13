import { connect } from 'react-redux'; 
import App from './App';

const mapStateToProps = (state) => {
  return { isLogged: state.session.auth.isLogged }
}; 
const mapDispatchToProps = (dispatch) => {
  return {
    
  }
};
export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(App); 