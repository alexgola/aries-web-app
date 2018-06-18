import { actionTypes } from './ChecklistsActions'
import createReducer from '../../../store/create-reducers';

const initialState = {
  checklists: {
    loading: false,
    error: null,
    list: [],
  },
  detail: {
    loading: false,
    error: null,
    data: null,
  }
}

export default createReducer({ ...initialState }, {
  [actionTypes.CHECKLISTS_GET_REQUEST](state, action){
    return { ...state,
      checklists: {
        ...state.checklists, 
        loading: action.payload.loading,
      }
    }
  },
  [actionTypes.CHECKLISTS_GET_SUCCESS](state, action){
    return { ...state, 
      checklists: {
        ...state.checklists, 
        loading: false,
        list: action.payload.list,
        error: null,
      }
    }
  },
  [actionTypes.CHECKLISTS_GET_FAILURE](state, action){
    return { ...state, 
      checklists: {
        ...state.checklists, 
        loading: false,
        error: action.payload.error,
        list: null,
      }
    }
  }, 
  [actionTypes.CHECKLIST_DETAIL_REQUEST](state, action){
    return { ...state,
      detail: {
        ...state.checklists, 
        loading: action.payload.loading,
      }
    }
  },
  [actionTypes.CHECKLIST_DETAIL_SUCCESS](state, action){
    return { ...state, 
      detail: {
        ...state.checklists, 
        loading: false,
        data: action.payload,
        error: null,
      }
    }
  },
  [actionTypes.CHECKLIST_DETAIL_FAILURE](state, action){
    return { ...state, 
      detail: {
        ...state.checklists, 
        loading: false,
        error: action.payload.error,
        data: null,
      }
    }
  },
});