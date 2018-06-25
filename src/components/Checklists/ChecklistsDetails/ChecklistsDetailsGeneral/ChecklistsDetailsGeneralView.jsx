import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {injectIntl, intlShape, defineMessages} from 'react-intl'
import ChecklistsDetailsGeneralCustomerView from './ChecklistsDetailsGeneralCustomer'
import ChecklistsDetailsGeneralSystemView from './ChecklistsDetailsGeneralSystem'
import { HeaderH2 } from '../../../style-utils';

const messages = defineMessages({
  generalInfo: { id: 'GENERAL_INFO' },
})

const MainContainer = styled.div`

`

const ChecklistsDetailsGeneral = ({intl, checklist, options}) => {
  const {formatMessage} = intl
  return (
    <MainContainer>
      <HeaderH2 dimension={'h2'} text={`${formatMessage(messages.generalInfo)}` }/>
      <ChecklistsDetailsGeneralCustomerView checklist={checklist} options={options}/>
      <ChecklistsDetailsGeneralSystemView checklist={checklist} options={options}/>
    </MainContainer>
  )
};

// PropTypes
ChecklistsDetailsGeneral.propTypes = {
  checklist: PropTypes.object.isRequired,
};

export default injectIntl(ChecklistsDetailsGeneral);