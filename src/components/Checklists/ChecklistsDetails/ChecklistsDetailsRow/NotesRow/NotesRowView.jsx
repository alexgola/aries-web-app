import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {injectIntl, intlShape, defineMessages} from 'react-intl'
import {Form, TextArea} from '../../../../UI'
import rowWrapper from '../CommonRowWrapper'
import {dataShape, optionsShape} from './prop-types'

const NotesContainer = styled(Form)`
  display: inline-block;
  width: 100%;
`
const messages = defineMessages({
  note: {id: 'NOTE'}
})

const NotesRowView = ({intl, data, onChange, options}) => {
  const {formatMessage} = intl
  const {notes} = data

  const handleChange = ({field, value}) => {
    data[field] = value;
    onChange(data);
  }

  return (
    <div>
      <NotesContainer>
        <Form.Field>
        <label>{formatMessage(messages.note)}</label>
          <TextArea
            autoHeight 
            value={notes}
            fluid
            onChange={(_, {value}) => handleChange({field: 'notes', value})}
          />
        </Form.Field>
      </NotesContainer>
    </div>
  )
};

// PropTypes
NotesRowView.propTypes = {
    data: dataShape, 
    options: optionsShape,
    onChange: PropTypes.func.isRequired,
    intl: intlShape.isRequired,
};

export default rowWrapper(injectIntl(NotesRowView));