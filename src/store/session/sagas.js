import {take, call, put, fork, race} from 'redux-saga/effects'
import ariesProxy from '../../proxies/aries-proxy'

import {actionTypes} from './actions'

const execLogin = async (username, password) => await ariesProxy.authenticate({username, password})
const getMe = async () => await ariesProxy.users.getMe()

/**
 * Effect to handle authorization
 * @param  {string} username               The username of the user
 * @param  {string} password               The password of the user
 */
export function * authorize ({username, password}) {
  // We send an action that tells Redux we're sending a request
  yield put({type: actionTypes.USER_LOGIN_REQUEST, payload: { sending: true }})

  // We then try to register or log in the user, depending on the request
  try {
    const resp = yield call(execLogin, username, password)
    yield put({type:  actionTypes.USER_LOGIN_SUCCESS, payload: { response: resp }})

    return true;
  } catch (error) {
    // If we get an error we send Redux the appropiate action and return
    yield put({type:  actionTypes.USER_LOGIN_FAILURE, payload: { error: error }})
    return false
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({type:  actionTypes.USER_LOGIN_REQUEST,  payload: { sending: false }})
  }
}
/**
 * Log in saga
 */
export function * loginFlow () {
  // Because sagas are generators, doing `while (true)` doesn't block our program
  // Basically here we say "this saga is always listening for actions"
  while (true) {
    // And we're listening for `LOGIN_REQUEST` actions and destructuring its payload
    const request = yield take(actionTypes.USER_LOGIN_REQUEST)
    const {username, password} = request.payload

    // A `LOGOUT` action may happen while the `authorize` effect is going on, which may
    // lead to a race condition. This is unlikely, but just in case, we call `race` which
    // returns the "winner", i.e. the one that finished first
    yield race({
      auth: call(authorize, {username, password}),
      //logout: take(LOGOUT)
    })
  }
}

export default [
  fork(loginFlow),
]