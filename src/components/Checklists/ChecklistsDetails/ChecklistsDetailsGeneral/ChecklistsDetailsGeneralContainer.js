import { connect } from 'react-redux'
import ChecklistsDetailsGeneralView from './ChecklistsDetailsGeneralView'
import {checklistDetailGeneralInfoCollapse} from '../../../../routes/Checklists/modules/ChecklistsActions'

const mapStateToProps = (state) => {
  const data = state.checklists.detail.data;
  return {
    isGeneralInfoCollapsed: data.isGeneralInfoCollapsed
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeIsCollapsedStatus: ({value}) => dispatch(checklistDetailGeneralInfoCollapse({value})),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChecklistsDetailsGeneralView)