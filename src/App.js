import React, { Component } from 'react'
import styled from 'styled-components'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'

const MainContainer = styled.div`
  height: 100%;
`
const Main = () => (
  <Switch>
    <Route path='/login' component={Login}></Route>
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