import { connect } from 'react-redux'
import ChecklistDetailPageView from './ChecklistDetailPageView'
import {checklistDetail} from '../../modules/ChecklistsActions'

const mapStateToProps = (state) => {
  const data = state.checklists.detail.data
  return {
    detail: {
      isLoading: !!(state.checklists.detail.loading || !data),
      paragraphsLength: (data ? data.paragraphs : []).length
    }
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getChecklistDetail: (id) => dispatch(checklistDetail.request({id})),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChecklistDetailPageView)