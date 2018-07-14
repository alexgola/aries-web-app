import { actionTypes } from './ChecklistsActions'
import createReducer from '../../../store/create-reducers'
import * as R from 'ramda'

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
    copiedData: null,
    edit: false,
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
        ...state.detail, 
        loading: action.payload.loading,
      }
    }
  },
  [actionTypes.CHECKLIST_DETAIL_SUCCESS](state, action){
    const checklist = action.payload.list && action.payload.list[0];
    if(checklist) {
      checklist.isGeneralInfoCollapsed = true
      checklist.paragraphs = checklist.paragraphs.map(paragraph => ({...paragraph, isCollapsed: true}))
    }

    return { ...state, 
      detail: {
        ...state.detail, 
        loading: false,
        data: checklist,
        error: null,
      }
    }
  },
  [actionTypes.CHECKLIST_DETAIL_FAILURE](state, action){
    return { ...state, 
      detail: {
        ...state.detail, 
        loading: false,
        error: action.payload.error,
        data: null,
      }
    }
  },
  [actionTypes.CHECKLIST_DETAIL_PARAGRAPH_COLLAPSE](state, action){
    const {value, paragraphIndex} = action.payload;
    return { ...state, 
      detail: {
        ...state.detail, 
        data: {
          ...state.detail.data, 
          paragraphs: state.detail.data.paragraphs.map((el, index) => index === paragraphIndex ? {...el, isCollapsed: value} : el)
        }
      }
    }
  },  
  [actionTypes.CHECKLIST_DETAIL_GENERAL_INFO_COLLAPSE](state, action){
    const {value} = action.payload;
    return { ...state, 
      detail: {
        ...state.detail, 
        data: {
          ...state.detail.data, 
          isGeneralInfoCollapsed: value,
        }
      }
    }
  }, 
  [actionTypes.CHECKLIST_DETAIL_UPDATE_ROW_DATA](state, action){
    const {data, paragraphIndex, rowIndex} = action.payload;
    return { ...state, 
      detail: {
        ...state.detail, 
        data: {
          ...state.detail.data, 
          paragraphs: state.detail.data.paragraphs.map((el, index) => index === paragraphIndex 
            ? {
              ...el,
              rows: el.rows.map((row, rIndex) => rIndex === rowIndex ? {...row, data} : row)
            } 
            : el)
        }
      }
    }
  },
  [actionTypes.CHECKLIST_DETAIL_START_EDIT_DATA](state){
    return { ...state, 
      detail: {
        ...state.detail, 
        edit: true,
        copiedData: R.clone(state.detail.data),
      }
    }
  },
});