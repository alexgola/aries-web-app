import { genActions, createRequestTypes } from '../actions'

// ======================================================
// Constants
// ======================================================
export const actionTypes = {
  ...createRequestTypes('USER_LOGIN'),
  USER_LOGOUT: 'USER_LOGOUT',
}

// ======================================================
// ACTIONS
// ======================================================
const createActions = genActions(actionTypes)

export const login = createActions('USER_LOGIN')
