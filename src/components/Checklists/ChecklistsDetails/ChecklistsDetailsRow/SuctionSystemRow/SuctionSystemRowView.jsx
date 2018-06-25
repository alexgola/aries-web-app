import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {injectIntl, intlShape, defineMessages} from 'react-intl'
import Input from '../../../../UI/Input'
import {Form, Radio} from '../../../../UI'
import rowWrapper from '../CommonRowWrapper';
import {SUCTION_SYSTEM_TYPE_HIGH_SENSITIVITY, SUCTION_SYSTEM_TYPE_NORMAL, SUCTION_SYSTEM_TYPE_LASER} from '../consts';
import {dataShape, optionsShape} from './prop-types'
import {media} from '../../../../style-utils'


const MainContainer = styled(Form)`
  display: inline-block;
  width: 100%;
`
const FormField = styled(Form.Field)`
  display: block;
  width: 100%;
  ${media.tablet`
    display: inline-block;
    width: 32%;
  `}
`

const RadioGroupField = styled(FormField)`
  ${media.tablet`
    width: 66%;
  `}
`
const NotesFormField = styled(FormField)`
  ${media.tablet`
    width: 100%;
  `}
`

const Separator = styled.div`
  display: none;
  ${media.tablet`
    display: inline-block;
    width: 2%;
  `}
`

const StyledRadio = styled(Radio)`
  width: 33%;
`

const messages = defineMessages({
  normal: { id: 'NORMAL' },
  highSensitivity: { id: 'HIGH_SENSITIVITY' },
  laser: { id: 'LASER' },
  model: { id: 'MODEL' },
  position: { id: 'POSITION' },
  brand: { id: 'BRAND' },
  note: {id: 'NOTE'}, 
  sensorNumber: { id: 'SENSOR_NUMBER' },
})

const SuctionSystemRow = ({intl, data, onChange, options}) => {
  const {formatMessage} = intl
  const {suctionSystemType, sensorNumber, brand, model, position, notes} = data

  const handleChange = ({field, value}) => {
    data[field] = value;
    onChange(data);
  }

  return (
    <div>
      <MainContainer>
        <RadioGroupField>
          <StyledRadio
            label={formatMessage(messages.normal)}
            value={SUCTION_SYSTEM_TYPE_NORMAL}
            checked={suctionSystemType == SUCTION_SYSTEM_TYPE_NORMAL} //eslint-disable-line eqeqeq
          />

          <StyledRadio
            label={formatMessage(messages.highSensitivity)}
            value={SUCTION_SYSTEM_TYPE_HIGH_SENSITIVITY}
            checked={suctionSystemType == SUCTION_SYSTEM_TYPE_HIGH_SENSITIVITY} //eslint-disable-line eqeqeq
          />

          <StyledRadio
            label={formatMessage(messages.laser)}
            value={SUCTION_SYSTEM_TYPE_LASER}
            checked={suctionSystemType == SUCTION_SYSTEM_TYPE_LASER} //eslint-disable-line eqeqeq
          />
        </RadioGroupField>
        <Separator/>
        <FormField>
          <label>{formatMessage(messages.sensorNumber)}</label>
          <Input            
            value={sensorNumber}
            type='text' />
        </FormField>

        <FormField>
          <label>{formatMessage(messages.brand)}</label>
          <Input            
            value={brand}
            type='text' />
        </FormField>
        <Separator/>
        <FormField>
          <label>{formatMessage(messages.model)}</label>
          <Input               
            value={model}
            type='text' />
        </FormField>
        <Separator/>
        <FormField>
          <label>{formatMessage(messages.position)}</label>
          <Input               
            value={position}
            type='text' />
        </FormField>

        <NotesFormField>
          <label>{formatMessage(messages.note)}</label>
          <Input 
            value={notes}
            fluid
            onChange={(_, {value}) => handleChange({field: 'notes', value})}
          />
        </NotesFormField>
      </MainContainer>
    </div>
  )
};

// PropTypes
SuctionSystemRow.propTypes = {
    data: dataShape.isRequired, 
    options: optionsShape,
    onChange: PropTypes.func.isRequired,
    intl: intlShape.isRequired,
};

export default rowWrapper(injectIntl(SuctionSystemRow));