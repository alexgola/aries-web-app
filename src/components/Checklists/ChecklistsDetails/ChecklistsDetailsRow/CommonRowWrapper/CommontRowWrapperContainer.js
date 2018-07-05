import { connect } from 'react-redux'
import CommonRowWrapperView from './CommonRowWrapperView'
import {checklistDetailUpdateRowData} from '../../../../../routes/Checklists/modules/ChecklistsActions'

const mapStateToProps = (state, initialProps) => {
  const { rowIndex, paragraphIndex } = initialProps;

  return {
    data: state.checklists.detail.data.paragraphs[paragraphIndex].rows[rowIndex],
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onChange: ({data, paragraphIndex, rowIndex}) => dispatch(checklistDetailUpdateRowData({value: data, paragraphIndex, rowIndex})),
  }
}
export default (Component) => connect(mapStateToProps, mapDispatchToProps)(CommonRowWrapperView(Component))