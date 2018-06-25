import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {defineMessages, injectIntl} from 'react-intl'
import {Input, Form} from '../../../../UI'
import {media, FormCard} from '../../../../style-utils'
import HeaderRow from '../../ChecklistsDetailsRow/HeaderRow'

const messages = defineMessages({
  customer: { id: 'CUSTOMER' },
  customerName: { id: 'COMPANY_NAME' },
  customerAddress: { id: 'ADDRESS' },
  customerCity: { id: 'CITY' },
  responsible: { id: 'RESPONSIBLE' },
  task: { id: 'TASK' },
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

const FormWrapper = FormCard;

const ChecklistsDetailsGeneralCustomer = ({checklist, intl, options}) => {
  const {formatMessage} = intl
  const readonly = (options && options.readonly) || false

  return (
    <MainContainer>
      <HeaderRow text={`${formatMessage(messages.customer)} - ${checklist.customerId}`}/>
      <FormWrapper>
        <FormField>
          <label>{formatMessage(messages.customerName)}</label>
          <Input 
            readOnly={readonly}            
            value={checklist.customerName}
            type='text' />
        </FormField>
        <TabletSeparator/>
        <FormField>
          <label>{formatMessage(messages.customerAddress)}</label>
          <Input               
            value={checklist.customerAddress}
            type='text' />
        </FormField>       
        <TabletSeparator/>
        <FormField>
          <label>{formatMessage(messages.customerCity)}</label>
          <Input               
            value={checklist.customerCity}
            type='text' />
        </FormField>   
        <DesktopSeparator/>     
        <FormField>
          <label>{formatMessage(messages.responsible)}</label>
          <Input               
            value={checklist.responsableName || ''}
            type='text' />
        </FormField>       
        <TabletSeparator/>
        <FormField>
          <label>{formatMessage(messages.task)}</label>
          <Input               
            value={checklist.responsableJob || ''}
            type='text' />
        </FormField>
      </FormWrapper>
    </MainContainer>
  )
};

// PropTypes
ChecklistsDetailsGeneralCustomer.propTypes = {
  checklist: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(ChecklistsDetailsGeneralCustomer);