import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import PrivateRouteView from './components/Routes/PrivateRoute';


const MainContainer = styled.div`
  height: 100%;
`

const App = ({isLogged, routes}) => (
  <MainContainer>
    <Switch>
      <Route exact path='/login' component={Login}></Route>      
      {
        isLogged === true 
        ? null
        : <Redirect to='/login' />
      }
      {
        routes.routes.map(({ component, ...otherRouteProp }) => (
          <PrivateRouteView isLogged={isLogged} key={otherRouteProp.path} path={otherRouteProp.path} component={component}/>
        ))
      }
    </Switch>
  </MainContainer>
);

App.propTypes = {  
  routes: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
  }))).isRequired,
}

export default App;