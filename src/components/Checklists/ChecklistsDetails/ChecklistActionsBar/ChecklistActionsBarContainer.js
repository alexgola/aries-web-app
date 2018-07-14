import { connect } from 'react-redux'
import ChecklistActionsBarView from './ChecklistActionsBarView'
import {checklistDetailStartEditData} from '../../../../routes/Checklists/modules/ChecklistsActions'

const mapStateToProps = (state) => {
  return {
    editMode: state.checklists.detail.edit,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    startEditing: () => dispatch(checklistDetailStartEditData()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChecklistActionsBarView)