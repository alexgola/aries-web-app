import { genActions, createRequestTypes } from '../../../store/actions'

// ======================================================
// Constants
// ======================================================

export const actionTypes = {
  ...createRequestTypes('SAVED_CART'),
  ...createRequestTypes('DELETE_ARTICLE'),
  ...createRequestTypes('EMPTY_SAVED_CART'),
}


// ======================================================
// ACTIONS
// ======================================================

const createActions = genActions(actionTypes)

export const savedCart = createActions('SAVED_CART')
export const deleteArticle = createActions('DELETE_ARTICLE')
export const emptySavedCart = createActions('EMPTY_SAVED_CART')
