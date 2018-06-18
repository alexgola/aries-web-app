import { all, call, fork, take, put } from 'redux-saga/effects'
import ariesProxy from '../../../proxies/aries-proxy'
import {actionTypes} from './ChecklistsActions'

const fetchChecklists = async _ => await ariesProxy.checklists.get({includes: 'system,customer'})
const fetchChecklistDetail = async (id) => await ariesProxy.checklists.getById({id, includes: 'system,customer,paragraphs,paragraphs.rows'})

function* doGetChecklists() {
  yield put({type: actionTypes.CHECKLISTS_GET_REQUEST, payload: { loading: true }})
  try {
    const resp = yield call(fetchChecklists)
    yield put({type:  actionTypes.CHECKLISTS_GET_SUCCESS, payload: resp})
    return true;
  } catch (error) {
    yield put({type:  actionTypes.CHECKLISTS_GET_FAILURE, payload: { error: error }})
  } finally {
    yield put({type:  actionTypes.CHECKLISTS_GET_REQUEST,  payload: { loading: false }})
  }
}
export function * getChecklists () {
  while (true) {
    yield take(actionTypes.CHECKLISTS_GET_REQUEST, doGetChecklists)
    yield doGetChecklists()
  }
}

function* doGetChecklistDetail({id}) {
  yield put({type: actionTypes.CHECKLIST_DETAIL_REQUEST, payload: { loading: true }})
  try {
    const resp = yield call(fetchChecklistDetail, id)
    yield put({type:  actionTypes.CHECKLIST_DETAIL_SUCCESS, payload: resp})
    return true;
  } catch (error) {
    yield put({type:  actionTypes.CHECKLIST_DETAIL_FAILURE, payload: { error: error }})
  } finally {
    yield put({type:  actionTypes.CHECKLIST_DETAIL_REQUEST,  payload: { loading: false }})
  }
}
export function * getChecklistDetail () {
  while (true) {
    const request = yield take(actionTypes.CHECKLIST_DETAIL_REQUEST, doGetChecklists)
    yield doGetChecklistDetail(request.payload)
  }
}


export default function* rootSaga() {
  yield all([
    fork(getChecklists),
    fork(getChecklistDetail),
  ])
}
