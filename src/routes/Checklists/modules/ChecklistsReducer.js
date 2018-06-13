import { trace } from 'loglevel'

import { actionTypes } from './ChecklistsActions'

import { $enhanceArticleObject } from '../../../utils/articleProvider'

// ======================================================
// Action Handlers
// ======================================================
const ACTION_HANDLERS = {
  [actionTypes.SAVED_CART_REQUEST]: (state, action) => {
    trace(state, action)
    return { ...state, loading: true, error: null }
  },
  [actionTypes.SAVED_CART_SUCCESS]: (state, action) => {
    trace(state, action)
    return {
      ...state,
      loading: false,
      error: null,
      articles: action.payload.map($enhanceArticleObject),
    }
  },
  [actionTypes.SAVED_CART_FAILURE]: (state, action) => {
    trace(state, action)
    return { ...state, loading: false, error: action.payload }
  },

  [actionTypes.DELETE_ARTICLE_REQUEST]: (state, action) => {
    trace(state, action)
    return { ...state, loading: true, error: null }
  },
  [actionTypes.DELETE_ARTICLE_SUCCESS]: (state, action) => {
    trace(state, action)
    return { ...state, loading: false, error: null }
  },
  [actionTypes.DELETE_ARTICLE_FAILURE]: (state, action) => {
    trace(state, action)
    return { ...state, loading: false, error: action.payload }
  },

}


// ======================================================
// Reducer
// ======================================================
const initialState = {
  loading: false,
  error: null,
  articles: [],
}
export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
