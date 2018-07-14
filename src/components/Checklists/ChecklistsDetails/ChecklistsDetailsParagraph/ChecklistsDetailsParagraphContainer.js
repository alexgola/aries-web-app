import { connect } from 'react-redux'
import ChecklistsDetailsParagraphView from './ChecklistsDetailsParagraphView'
import {checklistDetailParagraphCollapse} from '../../../../routes/Checklists/modules/ChecklistsActions'

const mapStateToProps = (state, initialProps) => {
  const {paragraphIndex} = initialProps;
  const paragraph = state.checklists.detail.data.paragraphs[paragraphIndex];
  return {
    data: {
      rows: (paragraph.rows || []).map(row => ({
        id: row.id, 
        rowType: row.rowType, 
        paragraphId: row.paragraphId, 
      })), 
      order: paragraph.order, 
      name: paragraph.name, 
      isCollapsed: paragraph.isCollapsed,
    },
    editMode: state.checklists.detail.edit,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeIsCollapsedStatus: ({value, paragraphIndex}) => dispatch(checklistDetailParagraphCollapse({value, paragraphIndex})),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChecklistsDetailsParagraphView)