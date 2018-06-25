import { connect } from 'react-redux'
import ChecklistDetailPageView from './ChecklistDetailPageView'
import {checklistDetail} from '../../modules/ChecklistsActions'

const mapStateToProps = (state) => {
  return {
    detail: {
      isLoading: state.checklists.detail.loading || !state.checklists.detail.data,
      data: state.checklists.detail.data || null,
    }
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getChecklistDetail: (id) => dispatch(checklistDetail.request({id})),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChecklistDetailPageView)