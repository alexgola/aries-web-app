import { genActions, createRequestTypes } from '../../../store/actions'

// ======================================================
// Constants
// ======================================================
export const actionTypes = {
  ...createRequestTypes('CHECKLISTS_GET'),
  ...createRequestTypes('CHECKLIST_DETAIL'),
}


// ======================================================
// ACTIONS
// ======================================================
const createActions = genActions(actionTypes)
export const getChecklists = createActions('CHECKLISTS_GET')
export const checklistDetail = createActions('CHECKLIST_DETAIL')
