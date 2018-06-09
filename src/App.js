import React, { Component } from 'react'
import styled from 'styled-components'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Checklists from './components/Checklists'
import { PrivateRoute } from './components/Routes';

const MainContainer = styled.div`
  height: 100%;
`
const Main = () => (
  <Switch>
    <Route path='/login' component={Login}></Route>
    <PrivateRoute path='/' component={Checklists}> </PrivateRoute>
  </Switch>
)

class App extends Component {
  render() {
    return (
      <MainContainer>
        <Main />
      </MainContainer>
    )
  }
}

export default App;