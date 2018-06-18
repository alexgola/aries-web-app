import React from 'react'
import {Input} from 'semantic-ui-react'

class AriesInput extends React.Component {
  render () {
    const size = this.props.size || 'small'
    
    return (
      <Input {...{...this.props, size}} />
    )
  }
}

export default AriesInput