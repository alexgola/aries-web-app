import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {injectIntl, intlShape, defineMessages} from 'react-intl'
import Radio from '../../../../UI/Radio'
import List from '../../../../UI/List'
import Input from '../../../../UI/Input'
import rowWrapper from '../CommonRowWrapper';


const StyledRadio = styled(Radio)`
  margin-right: 5%;
`

const StyledInput = styled(Input)`
  width: 40%;
`
const RadioGroup = styled.div`
  width: 40%;
  display: inline-block;
`

const messages = defineMessages({
  yes: {id: 'YES'},
  no: {id: 'NO'}
})

const ToggleConfirmRow = ({intl, data, onChange}) => {
  const {formatMessage} = intl;

  const handleChange = ({field, value}) => {
    data[field] = value;
    onChange(data);
  }

  return (
    <div>
      <RadioGroup>
        <StyledRadio
          label={formatMessage(messages.yes)}
          name='radioGroup'
          value='this'
          checked={true}
          onChange={(_, {value}) => handleChange({field: 'field', value})}
        />
        <StyledRadio
          label={formatMessage(messages.no)}
          name='radioGroup'
          value='that'
          checked={false}
          onChange={(_, {value}) => handleChange({field: 'field', value})}
        />
      </RadioGroup>
      <StyledInput icon='sticky note' iconPosition='left'/>
    </div>
  )
};

// PropTypes
ToggleConfirmRow.propTypes = {
    data: PropTypes.object.isRequired, 
    onChange: PropTypes.func.isRequired,
    intl: intlShape.isRequired,
};

export default rowWrapper(injectIntl(ToggleConfirmRow));