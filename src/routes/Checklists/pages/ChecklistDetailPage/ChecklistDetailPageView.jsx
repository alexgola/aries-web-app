import React from 'react'
import PropTypes from 'prop-types'

class ChecklistDetailPageView extends React.PureComponent {
  componentDidMount () {
    const {id} = this.props.match.params
    this.props.getChecklistDetail(id)
  }
  render () {
    const {data, isLoading} = this.props.detail
    return (
      <div> asdasdsadasdasdsadsa {JSON.stringify(data)}</div>
    )
  }
}

ChecklistDetailPageView.propTypes = {
  data: PropTypes.object.isRequired, 
}

export default ChecklistDetailPageView