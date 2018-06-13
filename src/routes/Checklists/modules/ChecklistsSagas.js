import { all, call, fork, takeEvery, take, select, put } from 'redux-saga/effects'
import { requestBuilder } from '../../../store/sagas'

import {
  actionTypes,
  savedCart as savedCartActions,
  deleteArticle as deleteArticleActions,
  emptySavedCart as emptySavedCartActions,
} from './SavedCartActions'
import { actionTypes as locationActionTypes } from '../../../store/actions/location'

import f from '../../../utils/fetch'
import PATHS from '../../../constants'

const getUserToken = ({ user: { token: key } }) => key

const fetchSavedCart = async token => (await f(PATHS.CART.GET_SAVED_CART, { token })).json()
const fetchEmptySavedCart = async token => (await f(PATHS.CART.EMPTY_SAVED_CART, { token })).json()
const deleteArticleSavedCart = async (token, idArticle) => (await f(PATHS.CART.DELETE_ARTICLE_SAVED_CART, { token, idArticle })).json()

function* getSavedCart(checkPath = false, action) {
  if (checkPath) {
    const { payload: { pathname } } = action
    if (!pathname.match(/\/virtualShop\/\d+\/savedCart/)) return
  }

  try {
    const key = yield select(getUserToken)
    const { common, articles } = yield call(fetchSavedCart, key)

    if (common.ack === 'OK' || common.faultCode === 59) {
      yield put(savedCartActions.success(articles || []))
    } else {
      yield put(savedCartActions.failure(common))
    }
  } catch (e) {
    yield put(savedCartActions.failure(e))
  }
}

function* doEmptySavedCart() {
  yield call(requestBuilder, emptySavedCartActions, fetchEmptySavedCart, undefined, false)
  yield call(getSavedCart)
}

function* watchSavedCart() {
  yield takeEvery(locationActionTypes.LOCATION_CHANGE, getSavedCart, true)
}

function* watchDeletedArticle() {
  while (1) { // eslint-disable-line
    const article = yield take(actionTypes.DELETE_ARTICLE_REQUEST)
    yield call(requestBuilder, deleteArticleActions, deleteArticleSavedCart, null, false, article.payload)
    yield call(getSavedCart)
  }
}

function* watchEmptySavedCart() {
  yield takeEvery(actionTypes.EMPTY_SAVED_CART_REQUEST, doEmptySavedCart)
}

export default function* rootSaga() {
  yield all([
    fork(getSavedCart),
    fork(watchSavedCart),
    fork(watchDeletedArticle),
    fork(watchEmptySavedCart),
  ])
}
