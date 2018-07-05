import React from 'react'
import PropTypes from 'prop-types'
import ChecklistsDetailsGeneral from '../../../../components/Checklists/ChecklistsDetails/ChecklistsDetailsGeneral';
import { Dimmer, Loader } from '../../../../components/UI';
import ChecklistsDetailsParagraph from '../../../../components/Checklists/ChecklistsDetails/ChecklistsDetailsParagraph';
import { PageContent } from '../../../../styles';
import ChecklistActionsBar from '../../../../components/Checklists/ChecklistsDetails/ChecklistActionsBar';


class ChecklistDetailPageView extends React.PureComponent {
  componentDidMount () {
    const {id} = this.props.match.params
    this.props.getChecklistDetail(id)
  }
  render () {
    const {isLoading, paragraphsLength} = this.props.detail
    
    if(isLoading) {
      return (
        <Dimmer inverted active={isLoading}>
            <Loader inverted />
        </Dimmer>
      );
    }

    return (
      <PageContent>
        <ChecklistActionsBar />
        <ChecklistsDetailsGeneral/> 
        {Array.apply(null, {length: paragraphsLength}).map((_, index)=> {
          return <ChecklistsDetailsParagraph key={`checklist_paragraph_${index}`} paragraphIndex={index}/> 
        })}
      </PageContent>
    )
  }
}

ChecklistDetailPageView.propTypes = {
  detail: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    paragraphsLength: PropTypes.number,
  }),
}

export default ChecklistDetailPageView