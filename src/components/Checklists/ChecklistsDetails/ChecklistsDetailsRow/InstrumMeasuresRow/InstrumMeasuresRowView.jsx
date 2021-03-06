import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {injectIntl, intlShape, defineMessages} from 'react-intl'
import Input from '../../../../UI/Input'
import {Form, List, Radio} from '../../../../UI'
import rowWrapper from '../CommonRowWrapper';
import {dataShape, optionsShape} from './prop-types'
import {media} from '../../../../style-utils'

const MainContainer = styled(Form)`
  display: inline-block;
  width: 100%;
`
const FormField = styled(Form.Field)`
  display: inline-block;
  width: 49%!important; 
  ${media.tablet`
    width: 15%!important;
  `}
`
const Separator = styled.div`
  display: none;
  width: 2%;
  ${media.tablet`
    display: inline-block;
  `}
`

const PersistentSeparator = styled(Separator)`
  display: inline-block!important;
`

const StyledRadio = styled(Radio)`
  width: 50%;
`


const messages = defineMessages({
  startVoltage: { id: 'START_VOLT' },
  nextVoltage: { id: 'VOLT_AFTER_AN_HOUR' },
  restAbsorption: { id: 'REST_ABSORPTION' },
  alarmAbsorption: { id: 'ABSORPTION_IN_ALARM' },
  hourAutonomy: { id: 'HOUR_AUTONOMY' },
  note: {id: 'NOTE'}
})

const InstrumMeasuresRow = ({intl, data, onChange, options}) => {
  const {formatMessage} = intl
  const {startVoltage, nextVoltage, restAbsorption, alarmAbsorption, hourAutonomy, notes} = data

  const handleChange = ({field, value}) => {
    data[field] = value;
    onChange(data);
  }

  return (
    <div>
      <MainContainer>
        <FormField>
          <label>{formatMessage(messages.startVoltage)}</label>
          <Input            
            value={startVoltage}
            type='number' />
        </FormField>
        <PersistentSeparator/>
        <FormField>
          <label>{formatMessage(messages.nextVoltage)}</label>
          <Input               
            value={nextVoltage}
            type='number' />
        </FormField>
        <Separator/>
        <FormField>
          <label>{formatMessage(messages.restAbsorption)}</label>
          <Input               
            value={restAbsorption}
            type='text' />
        </FormField>
        <PersistentSeparator/>
        <FormField>
          <label>{formatMessage(messages.alarmAbsorption)}</label>
          <Input  
            value={alarmAbsorption}
            type='number' />
        </FormField>
        <Separator/>
        <FormField>
          <label>{formatMessage(messages.hourAutonomy)}</label>
          <Input  
            value={hourAutonomy}
            type='number' />
        </FormField>
        <PersistentSeparator/>
        <FormField>
          <label>{formatMessage(messages.note)}</label>
            <Input 
              value={notes}
              fluid
              onChange={(_, {value}) => handleChange({field: 'notes', value})}
            />
        </FormField>
      </MainContainer>
    </div>
  )
};

// PropTypes
InstrumMeasuresRow.propTypes = {
    data: dataShape, 
    options: optionsShape,
    onChange: PropTypes.func.isRequired,
    intl: intlShape.isRequired,
};

export default rowWrapper(injectIntl(InstrumMeasuresRow));