import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {defineMessages, injectIntl} from 'react-intl'
import {Input, Form} from '../../../../UI'
import {media, FormCard} from '../../../../style-utils'
import HeaderRow from '../../ChecklistsDetailsRow/HeaderRow'
import AriesDate from '../../../../UI/AriesDate';

const messages = defineMessages({
  system: { id: 'SYSTEM' },
  systemId: {id: 'SYSTEM_ID'},
  description: {id: 'DESCRIPTION'},
  central: {id: 'CENTRAL'},
  installedOn: {id: 'INSTALLED_ON'},
  installedIn: {id: 'INSTALLED_IN'},
  visitNumber: {id: 'VISIT_NUMBER'},
  periodicCheck: {id: 'PERIODIC_CHECK'},
  departments: {id: 'DEPARTMENTS'}
})

const FormField = styled(Form.Field)`
  display: block;
  width: 100%;
  ${media.tablet`
    display: inline-block;
    width: 32%;
  `}
  ${media.desktop`
    display: inline-block;
    width: 18.4%;
  `}
`

const MainContainer = styled.div`

`
const DesktopSeparator = styled.div`
  display: none;
  ${media.desktop`
    display: inline-block;
    width: 2%;
  `}
`

const TabletSeparator = styled(DesktopSeparator)`
  display: none;
  ${media.tablet`
    display: inline-block;
    width: 2%;
  `}
`

const OnlyTabletSeparator = styled(DesktopSeparator)`
  display: none;
  ${media.tablet`
    display: inline-block;
    width: 2%;
  `}
  ${media.desktop`
    display: none;
  `}
`


const FormWrapper = FormCard


const ChecklsitsDetailsGeneralSystem = ({checklist, intl, options}) => {
  const {formatMessage} = intl
  const readonly = (options && options.readonly) || false

  return (
    <MainContainer>
      <HeaderRow text={`${formatMessage(messages.system)} - ${checklist.systemId}`}/>
      <FormWrapper>
        <FormField>
          <label>{formatMessage(messages.description)}</label>
          <Input 
            readOnly={readonly}            
            value={checklist.system.description}
            type='text' />
        </FormField>
        <TabletSeparator/>
        <FormField>
          <label>{formatMessage(messages.central)}</label>
          <Input               
            value={checklist.systemCentral || ''}
            type='text' />
        </FormField>       
        <TabletSeparator/>
        <FormField>
          <label>{formatMessage(messages.installedOn)}</label>
          <Input               
            value={checklist.systemInstalledDate ? AriesDate({unixTimestamp: checklist.systemInstalledDate}) : ''}
            type='text' />
        </FormField>  
        <DesktopSeparator/>      
        <FormField>
          <label>{formatMessage(messages.installedIn)}</label>
          <Input               
            value={checklist.systemInstalledPlace || ''}
            type='text' />
        </FormField>       
        <TabletSeparator/>
        <FormField>
          <label>{formatMessage(messages.visitNumber)}</label>
          <Input               
            value={checklist.visitNumber || ''}
            type='text' />
        </FormField>
        <OnlyTabletSeparator/>
        <FormField>
          <label>{formatMessage(messages.periodicCheck)}</label>
          <Input               
            value={checklist.periodicCheck || ''}
            type='text' />
        </FormField>
        <DesktopSeparator/>  
        <FormField>
          <label>{formatMessage(messages.departments)}</label>
          <Input               
            value={checklist.systemDepartments || ''}
            type='text' />
        </FormField>
      </FormWrapper>
    </MainContainer>
  )
};

// PropTypes
ChecklsitsDetailsGeneralSystem.propTypes = {
  checklist: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(ChecklsitsDetailsGeneralSystem);