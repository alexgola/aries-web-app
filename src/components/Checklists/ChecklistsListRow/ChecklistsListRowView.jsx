import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Table } from 'semantic-ui-react'
import AriesDate from '../../UI/AriesDate'


const ChecklistListRow = ({data}) => {

  return (
    <Table.Row>
        <Table.Cell>{data.id}</Table.Cell>
        <Table.Cell>
            <AriesDate unixTimestamp={data.executionDate}/>
        </Table.Cell>
        <Table.Cell>{data.customer.companyName}</Table.Cell>
        <Table.Cell>{data.system.description}</Table.Cell>
        <Table.Cell>{data.checklistType}</Table.Cell>
    </Table.Row>
  )
};

// PropTypes
ChecklistListRow.propTypes = {
  data: PropTypes.object.isRequired
};


export default ChecklistListRow;