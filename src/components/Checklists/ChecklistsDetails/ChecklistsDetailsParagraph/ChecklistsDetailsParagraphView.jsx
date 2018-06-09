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
  CHECKLIST_ROW_TYPE_TOGGLE_NULL_CONFIRm_QTY,
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
  switch(row.rowType) {
    case CHECKLIST_ROW_TYPE_TOGGLE_CONFIRM: 
    break;
    case CHECKLIST_ROW_TYPE_TOGGLE_NULL_CONFIRM: 
    break;
    case CHECKLIST_ROW_TYPE_NOTES: 
    break;
    case CHECKLIST_ROW_TYPE_HEADER: 
    break;
    case CHECKLIST_ROW_TYPE_CENTRAL_INFO: 
    break;
    case CHECKLIST_ROW_TYPE_MASTER_SLAVE: 
    break;
    case CHECKLIST_ROW_TYPE_BATTERY_SPEC: 
    break;
    case CHECKLIST_ROW_TYPE_INSTRUM_MEASURES: 
    break;
    case CHECKLIST_ROW_TYPE_POWER_SUPPLY_INFO: 
    break;
    case CHECKLIST_ROW_TYPE_SUCTION_SYSTEM: 
    break;
    case CHECKLIST_ROW_TYPE_DATE_NOTES: 
    break;
    case CHECKLIST_ROW_TYPE_CONFIGURATION_LAN: 
    break;
    case CHECKLIST_ROW_TYPE_TOGGLE_NULL_CONFIRm_QTY: 
    break;
    case CHECKLIST_ROW_TYPE_INFO_AND_PRECAUTIONS: 
    break;
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