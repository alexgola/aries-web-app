import React from 'react'
import PropTypes from 'prop-types'
import ChecklistsDetailsGeneral from '../../../../components/Checklists/ChecklistsDetails/ChecklistsDetailsGeneral/ChecklistsDetailsGeneralView';
import { Dimmer, Loader } from '../../../../components/UI';
import {map} from 'ramda'
import ChecklistsDetailsParagraph from '../../../../components/Checklists/ChecklistsDetails/ChecklistsDetailsParagraph/ChecklistsDetailsParagraphView';

class ChecklistDetailPageView extends React.PureComponent {
  componentDidMount () {
    const {id} = this.props.match.params
    this.props.getChecklistDetail(id)
  }
  render () {
    const {data, isLoading} = this.props.detail
    
    if(isLoading) {
      return (
        <Dimmer inverted active={isLoading}>
            <Loader inverted />
        </Dimmer>
      );
    }

    return (
      <div>
        <ChecklistsDetailsGeneral checklist={data}/> 
        ${map(item => {
          return <ChecklistsDetailsParagraph key={`checklist_paragraph_${item.id}`} data={item}/> 
        }, data.paragraphs)}
      </div>
    )
  }
}

ChecklistDetailPageView.propTypes = {
  data: PropTypes.object, 
}

export default ChecklistDetailPageView