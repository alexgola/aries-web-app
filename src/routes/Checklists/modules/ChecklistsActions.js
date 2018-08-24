import { genActions, createRequestTypes } from '../../../store/actions'

// ======================================================
// Constants
// ======================================================
export const actionTypes = {
  ...createRequestTypes('CHECKLISTS_GET'),
  ...createRequestTypes('CHECKLIST_DETAIL'),
  ...createRequestTypes('CHECKLIST_DETAIL_REMOTE_UPDATE'),
  ...createRequestTypes('CHECKLIST_DETAIL_SYSTEM_ASSOCIATION'),
  CHECKLIST_DETAIL_PARAGRAPH_COLLAPSE: 'CHECKLIST_DETAIL_PARAGRAPH_COLLAPSE',
  CHECKLIST_DETAIL_GENERAL_INFO_COLLAPSE: 'CHECKLIST_DETAIL_GENERAL_INFO_COLLAPSE',
  CHECKLIST_DETAIL_UPDATE_ROW_DATA: 'CHECKLIST_DETAIL_UPDATE_ROW_DATA',
  CHECKLIST_DETAIL_START_EDIT_DATA: 'CHECKLIST_DETAIL_START_EDIT_DATA',
  CHECKLIST_DETAIL_CANCEL_EDIT_NO_UPDATE: 'CHECKLIST_DETAIL_CANCEL_EDIT_NO_UPDATE',
}


// ======================================================
// ACTIONS
// ======================================================
const createActions = genActions(actionTypes)
export const getChecklists = createActions('CHECKLISTS_GET')
export const checklistDetail = createActions('CHECKLIST_DETAIL')
export const remoteUpdate= createActions('CHECKLIST_DETAIL_REMOTE_UPDATE')
export const createSystemChecklistAssoc = createActions('CHECKLIST_DETAIL_SYSTEM_ASSOCIATION')
export const checklistDetailParagraphCollapse = ({value, paragraphIndex}) => ({type: 'CHECKLIST_DETAIL_PARAGRAPH_COLLAPSE', payload: {value, paragraphIndex}})
export const checklistDetailGeneralInfoCollapse = ({value}) => ({type: 'CHECKLIST_DETAIL_GENERAL_INFO_COLLAPSE', payload: {value}})
export const checklistDetailUpdateRowData = ({data, paragraphIndex, rowIndex}) => ({ type: 'CHECKLIST_DETAIL_UPDATE_ROW_DATA', payload: {data, paragraphIndex, rowIndex }})
export const checklistDetailStartEditData = () => ({ type: 'CHECKLIST_DETAIL_START_EDIT_DATA' })
export const checklistDetailCancelEdit = () => ({ type: actionTypes.CHECKLIST_DETAIL_CANCEL_EDIT_NO_UPDATE })
