import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {injectIntl, intlShape, defineMessages} from 'react-intl'
import Input from '../../../../UI/Input'
import {Form, Checkbox} from '../../../../UI'
import rowWrapper from '../CommonRowWrapper';
import {dataShape, optionsShape} from './prop-types'
import {media} from '../../../../style-utils'
import { getDateByUnixtimestamp } from '../../../../../utils/datetime-utils';


const MainContainer = styled(Form)`
  display: inline-block;
  width: 100%;
`

const FormField = styled(Form.Field)`
  display: block;
  width: 100%;
`

const Separator = styled.div`
  display: none;
  ${media.tablet`
    display: inline-block;
    width: 2%;
  `}
`

const messages = defineMessages({
  checkoutlistPrecautionsText: { id: 'CHECKLIST_PREACUTIONS_TEXT' },
})

const DateNoteRow = ({intl, data, onChange, options}) => {
  const {formatMessage} = intl
  const {value} = data

  const handleChange = ({field, value}) => {
    data[field] = value;
    onChange(data);
  }

  return (
    <div>
      <MainContainer>
        <FormField>
          <Checkbox label={<label>{formatMessage(messages.checkoutlistPrecautionsText)}</label>} />
        </FormField> 
      </MainContainer>
    </div>
  )
};

// PropTypes
DateNoteRow.propTypes = {
    data: dataShape, 
    options: optionsShape,
    onChange: PropTypes.func.isRequired,
    intl: intlShape.isRequired,
};

export default rowWrapper(injectIntl(DateNoteRow));