import React from 'react'
import PropTypes from 'prop-types'
import {Form, Radio} from 'semantic-ui-react'


const ToggleConfirmRow = ({data, onChange}) => {

  const handleChange = ({field, value}) => {
    data[field] = value;
    onChange(data);
  }

  return (
      <Form>
        <Form.Field>
          Selected value: <b>{this.state.value}</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Choose this'
            name='radioGroup'
            value='this'
            checked={this.state.value === 'this'}
            onChange={(_, {value}) => handleChange({field: 'field', value})}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Or that'
            name='radioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={(_, {value}) => handleChange({field: 'field', value})}
          />
        </Form.Field>
      </Form>
  )
};

// PropTypes
ToggleConfirmRow.propTypes = {
    data: PropTypes.object.isRequired, 
    onChange: PropTypes.func.isRequired,
};

export default ToggleConfirmRow;