import React from 'react'
import styled from 'styled-components'
import { defineMessages } from 'react-intl';

export const MainContainer = styled.div`
  padding: 10px 20px!important;
`

const messages = defineMessages({
  address: { id: 'ADDRESS' },
  city: { id: 'CITY' },
  responsible: { id: 'RESPONSIBLE' },
  task: { id: 'TASK' },
  systemId: {id: 'SYSTEM_ID'},
  installedOn: {id: 'INSTALLED_ON'},
  installedIn: {id: 'INSTALLED_IN'},
  visitNumber: {id: 'VISIT_NUMBER'},
  periodicCheck: {id: 'PERIODIC_CHECK'},
  technicians: {id: 'TECHNICIANS'}
})

const ChecklistsDetailsGeneral = ({paragraphs}) => {
  return (
    <MainContainer>
      asdasd
    </MainContainer>
  )
};

// PropTypes
ChecklistsDetailsGeneral.propTypes = {
};

export default ChecklistsDetailsGeneral