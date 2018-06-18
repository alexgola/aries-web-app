import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {injectIntl, intlShape, defineMessages} from 'react-intl'
import Input from '../../../../UI/Input'
import {Form, Radio, Checkbox} from '../../../../UI'
import rowWrapper from '../CommonRowWrapper';
import {SNPM_VERSION_1, SNPM_VERSION_2, SNPM_VERSION_3} from '../consts';
import {dataShape, optionsShape} from './prop-types'
import {media} from '../../../../style-utils'


const MainContainer = styled(Form)`
  display: inline-block;
  width: 100%;
`
const FormField = styled(Form.Field)`
  display: block;
  width: 48%;
  ${media.tablet`
    display: inline-block;
    width: 23%;
  `}
`

const Separator = styled.div`
  display: inline-block;
  width: 2%;
  ${media.tablet`
    width: 2%;
  `}
`

const StyledRadio = styled(Radio)`
  width: 33%;
`
const StyledCheckbox = styled(Checkbox)`
  display: inline-block;
  top: 5px;
  width: 10%;
`

const InoutP2P = styled(Input)`
  width: 90%!important;
`

const messages = defineMessages({
  v1: {id: 'V1'},
  v2: {id: 'V2'},
  v3: {id: 'V3'},
  snmpVersion: {id: 'SNMP_VERSION'}, 
  internalIp: {id: 'INTERNAL_IP'},
  externalIp: {id: 'EXTERNAL_IP'},
  username: {id: 'USERNAME'},
  password: {id: 'PASSWORD'},
  ports: {id: 'PORTS'},
  serialNumber: {id: 'SERIAL_NUMBER'},
  ping: {id: 'PING'},
  ddnsServer: {id: 'DDNS_SERVER'},
  ddnsUsername: {id: 'DDNS_USERNAME'},
  ddnsPassword: {id: 'DDNS_PASSWORD'},
  p2p: {id: 'P2P'},
  notes: {id: 'NOTE'},
})

const ConfigurationLanRow = ({intl, data, onChange, options}) => {
  const {formatMessage} = intl
  const {
    serialNumber, 
    internalIp, 
    externalIp, 
    ports, 
    username, 
    password,
    peerToPeer,
    peerToPeerNotes,
    snmpVersion,
    ping,
    ddnsServer,
    ddnsUsername,
    ddnsPassword,
    notes,
  } = data

  const handleChange = ({field, value}) => {
    data[field] = value;
    onChange(data);
  }

  return (
    <div>
      <MainContainer>
        <FormField>
          <label>{formatMessage(messages.internalIp)}</label>
          <Input            
            value={internalIp}
            type='text' />
        </FormField>
        <Separator/>
        <FormField>
          <label>{formatMessage(messages.externalIp)}</label>
          <Input               
            value={externalIp}
            type='text' />
        </FormField>
        <Separator/>
        <FormField>
          <label>{formatMessage(messages.ports)}</label>
          <Input               
            value={ports}
            type='text' />
        </FormField>

        <Separator/>
        <FormField>
          <label>{formatMessage(messages.serialNumber)}</label>
          <Input               
            value={serialNumber}
            type='text' />
        </FormField>

        <FormField>
          <label>{formatMessage(messages.snmpVersion)}</label>
          <StyledRadio
            label={formatMessage(messages.v1)}
            value={SNPM_VERSION_1}
            checked={snmpVersion === SNPM_VERSION_1}
          />

          <StyledRadio
            label={formatMessage(messages.v2)}
            value={SNPM_VERSION_2}
            checked={snmpVersion === SNPM_VERSION_2}
          />

          <StyledRadio
            label={formatMessage(messages.v3)}
            value={SNPM_VERSION_3}
            checked={snmpVersion === SNPM_VERSION_3}
          />
        </FormField>
        <Separator/>
        <FormField>
          <label>{formatMessage(messages.p2p)}</label>
          <StyledCheckbox 
            checked={peerToPeer}/>
          <InoutP2P               
            value={peerToPeerNotes}
            type='text' />
        </FormField>
        <Separator/>
        <FormField>
        <label>{formatMessage(messages.username)}</label>
          <Input 
            value={username}
            fluid
            onChange={(_, {value}) => handleChange({field: 'username', value})}
          />
        </FormField>
        <Separator/>
        <FormField>
        <label>{formatMessage(messages.password)}</label>
          <Input 
            value={password}
            fluid
            onChange={(_, {value}) => handleChange({field: 'password', value})}
          />
        </FormField>
        <FormField>
        <label>{formatMessage(messages.ddnsServer)}</label>
          <Input 
            value={ddnsServer}
            fluid
            onChange={(_, {value}) => handleChange({field: 'ddnsServer', value})}
          />
        </FormField>
        <Separator/>
        <FormField>
        <label>{formatMessage(messages.ddnsUsername)}</label>
          <Input 
            value={ddnsUsername}
            fluid
            onChange={(_, {value}) => handleChange({field: 'ddnsUsername', value})}
          />
        </FormField>
        <Separator/>
        <FormField>
        <label>{formatMessage(messages.ddnsPassword)}</label>
          <Input 
            value={ddnsPassword}
            fluid
            onChange={(_, {value}) => handleChange({field: 'ddnsPassword', value})}
          />
        </FormField>
        <Separator/>
        <FormField>
        <label>{formatMessage(messages.notes)}</label>
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
ConfigurationLanRow.propTypes = {
    data: dataShape, 
    options: optionsShape,
    onChange: PropTypes.func.isRequired,
    intl: intlShape.isRequired,
};

export default rowWrapper(injectIntl(ConfigurationLanRow));