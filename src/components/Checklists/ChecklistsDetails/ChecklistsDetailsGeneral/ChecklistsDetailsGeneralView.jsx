import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {injectIntl, defineMessages} from 'react-intl'
import ChecklistsDetailsGeneralCustomerView from './ChecklistsDetailsGeneralCustomer'
import ChecklistsDetailsGeneralSystemView from './ChecklistsDetailsGeneralSystem'
import { HeaderH2 } from '../../../../styles';

const messages = defineMessages({
  generalInfo: { id: 'GENERAL_INFO' },
})

const MainContainer = styled.div`

`

const Content = styled.div`
  transition: height 1s ease;
  overflow: hidden;
`;

const CollapsedContent = styled(Content)`
  height: 0px;
`

const ExpandedContent = styled(Content)`
  height: auto;
`

const ChecklistsDetailsGeneral = ({intl, isGeneralInfoCollapsed, options, changeIsCollapsedStatus}) => {
  const {formatMessage} = intl
  const MyContent = isGeneralInfoCollapsed ? CollapsedContent : ExpandedContent
  return (
    <MainContainer>
      <HeaderH2 
        collapsable={"true"}  
        dimension={'h2'} 
        text={`${formatMessage(messages.generalInfo)}` }
        onClick={() => changeIsCollapsedStatus({value: !isGeneralInfoCollapsed})}/>
      <MyContent>
        <ChecklistsDetailsGeneralCustomerView options={options}/>
        <ChecklistsDetailsGeneralSystemView options={options}/>
      </MyContent>
    </MainContainer>
  )
};

// PropTypes
ChecklistsDetailsGeneral.propTypes = {
  isGeneralInfoCollapsed: PropTypes.bool.isRequired,
  changeIsCollapsedStatus: PropTypes.func.isRequired, 
  intl: PropTypes.object.isRequired
};

export default injectIntl(ChecklistsDetailsGeneral);