import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {injectIntl, intlShape, defineMessages} from 'react-intl'
import Input from '../../../../UI/Input'
import {Form, Radio} from '../../../../UI'
import rowWrapper from '../CommonRowWrapper';
import {MASTER_SLAVE_MASTER_VALUE, MASTER_SLAVE_SLAVE_VALUE} from '../consts';
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
const Separator = styled.div`
  display: none;
  ${media.tablet`
    display: inline-block;
    width: 2%;
  `}
`

const StyledRadio = styled(Radio)`
  width: 50%;
`

const messages = defineMessages({
  model: { id: 'MODEL' },
  position: { id: 'POSITION' },
  brand: { id: 'BRAND' },
  master: { id: 'MASTER' },
  slave: { id: 'SLAVE' },
  slaveId: { id: 'SLAVE_ID' },
  note: {id: 'NOTE'}
})

const CentralInfoRow = ({intl, data, onChange, options}) => {
  const {formatMessage} = intl
  const {brand, notes, model, position, masterSlave, slaveId} = data

  const handleChange = ({field, value}) => {
    data[field] = value;
    onChange(data);
  }

  return (
    <div>
      <MainContainer>
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

        <FormField>
          <StyledRadio
            label={formatMessage(messages.master)}
            value={MASTER_SLAVE_MASTER_VALUE}
            checked={masterSlave === MASTER_SLAVE_MASTER_VALUE}
          />

          <StyledRadio
            label={formatMessage(messages.slave)}
            value={MASTER_SLAVE_SLAVE_VALUE}
            checked={masterSlave === MASTER_SLAVE_SLAVE_VALUE}
          />
        </FormField>
        <Separator/>
        <FormField>
          <label>{formatMessage(messages.slaveId)}</label>
          <Input               
            value={slaveId}
            type='text' />
        </FormField>
        <Separator/>
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
CentralInfoRow.propTypes = {
    data: dataShape, 
    options: optionsShape,
    onChange: PropTypes.func.isRequired,
    intl: intlShape.isRequired,
};

export default rowWrapper(injectIntl(CentralInfoRow));