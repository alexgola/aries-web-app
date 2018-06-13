import React from 'react'
import PropTypes from 'prop-types'
import {
  CHECKLIST_ROW_TYPE_TOGGLE_CONFIRM,
  CHECKLIST_ROW_TYPE_TOGGLE_NULL_CONFIRM,
  CHECKLIST_ROW_TYPE_NOTES,
  CHECKLIST_ROW_TYPE_HEADER,
  CHECKLIST_ROW_TYPE_CENTRAL_INFO,
  CHECKLIST_ROW_TYPE_MASTER_SLAVE,
  CHECKLIST_ROW_TYPE_BATTERY_SPEC,
  CHECKLIST_ROW_TYPE_INSTRUM_MEASURES,
  CHECKLIST_ROW_TYPE_POWER_SUPPLY_INFO,
  CHECKLIST_ROW_TYPE_SUCTION_SYSTEM,
  CHECKLIST_ROW_TYPE_DATE_NOTES,
  CHECKLIST_ROW_TYPE_CONFIGURATION_LAN,
  CHECKLIST_ROW_TYPE_TOGGLE_NULL_CONFIRM_QTY,
  CHECKLIST_ROW_TYPE_INFO_AND_PRECAUTIONS
} from '../../consts'
import {
  BatteryInfoRow,
  CentralInfoRow, 
  ConfigurationLanRow, 
  DateNoteRow, 
  HeaderRow, 
  InfoAndPrecautionsRow, 
  InstrumMeasuresRow, 
  MasterSlaveRow, 
  NotesRow, 
  PowerSupplyRow, 
  SuctionSystemRow, 
  ToggleConfirmRow,
} from '../ChecklistsDetailsRow';
import {List} from '../../../UI';


const getRow = (row) => {
  const options = {readonly: false};

  switch(row.rowType) {
    case CHECKLIST_ROW_TYPE_TOGGLE_CONFIRM: 
      return <ToggleConfirmRow data={row.data} options={options}/>

    case CHECKLIST_ROW_TYPE_TOGGLE_NULL_CONFIRM: 
      return <ToggleConfirmRow data={row.data} options={options}/>

    case CHECKLIST_ROW_TYPE_NOTES: 
      return <NotesRow data={row.data} options={options}/>

    case CHECKLIST_ROW_TYPE_HEADER: 
      return <HeaderRow data={row.data} options={options}/>

    case CHECKLIST_ROW_TYPE_CENTRAL_INFO: 
      return <CentralInfoRow data={row.data} options={options}/>

    case CHECKLIST_ROW_TYPE_MASTER_SLAVE: 
      return <MasterSlaveRow data={row.data} options={options}/>

    case CHECKLIST_ROW_TYPE_BATTERY_SPEC: 
      return <BatteryInfoRow data={row.data} options={options}/>
      
    case CHECKLIST_ROW_TYPE_INSTRUM_MEASURES: 
      return <InstrumMeasuresRow data={row.data} options={options}/>

    case CHECKLIST_ROW_TYPE_POWER_SUPPLY_INFO: 
      return <PowerSupplyRow data={row.data} options={options}/>

    case CHECKLIST_ROW_TYPE_SUCTION_SYSTEM: 
      return <SuctionSystemRow data={row.data} options={options}/>

    case CHECKLIST_ROW_TYPE_DATE_NOTES: 
      return <DateNoteRow data={row.data} options={options}/>

    case CHECKLIST_ROW_TYPE_CONFIGURATION_LAN: 
      return <ConfigurationLanRow data={row.data} options={options}/>

    case CHECKLIST_ROW_TYPE_TOGGLE_NULL_CONFIRM_QTY: 
      return <ToggleConfirmRow data={row.data} options={options}/>

    case CHECKLIST_ROW_TYPE_INFO_AND_PRECAUTIONS: 
      return <InfoAndPrecautionsRow data={row.data} options={options}/>

  }
};

const ChecklistsDetailsParagraph = ({}) => {
  return (
    <List>
    </List>
  )
};

// PropTypes
ChecklistsDetailsParagraph.propTypes = {
};

export default ChecklistsDetailsParagraph;