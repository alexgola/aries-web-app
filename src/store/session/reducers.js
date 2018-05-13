import createReducer from '../create-reducers'
import {
} from './actions.types'

const initialState = {
  user: null, 
  isLogged: false
}

export default createReducer({ ...initialState }, {

})