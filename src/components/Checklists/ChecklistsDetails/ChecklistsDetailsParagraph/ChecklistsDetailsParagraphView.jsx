import React from 'react'
import {map} from 'ramda'
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
  CHECKLIST_ROW_TYPE_INFO_AND_PRECAUTIONS, 
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
import styled from 'styled-components';
import {NoMarginTop, HeaderH2 } from '../../../style-utils';

const SyledList = styled(List)`
  ${NoMarginTop}
`
const getRow = (row) => {
  const options = {readonly: false};
  const key = `checklist_row_${row.paragraphId}_${row.id}`;
  const onChange = () => {};
  
  const commonProps = {
    key, 
    data: row, 
    onChange,
  }

  switch(row.rowType) {
    case CHECKLIST_ROW_TYPE_TOGGLE_CONFIRM: 
      return <ToggleConfirmRow {...commonProps} options={{...options, hasNa: false, hasQuantity: false}}/>

    case CHECKLIST_ROW_TYPE_TOGGLE_NULL_CONFIRM: 
      return <ToggleConfirmRow {...commonProps} options={{...options, hasNa: true, hasQuantity: false}}/>

    case CHECKLIST_ROW_TYPE_NOTES: 
      return <NotesRow {...commonProps} options={options}/>

    case CHECKLIST_ROW_TYPE_HEADER: 
      return <HeaderRow {...commonProps} text={(row.data.nameValuePairs).header} options={options}/>

    case CHECKLIST_ROW_TYPE_CENTRAL_INFO: 
      return <CentralInfoRow {...commonProps} options={options}/>

    case CHECKLIST_ROW_TYPE_MASTER_SLAVE: 
      return <MasterSlaveRow {...commonProps} options={options}/>

    case CHECKLIST_ROW_TYPE_BATTERY_SPEC: 
      return <BatteryInfoRow  {...commonProps} options={options}/>
      
    case CHECKLIST_ROW_TYPE_INSTRUM_MEASURES: 
      return <InstrumMeasuresRow {...commonProps} options={options}/>

    case CHECKLIST_ROW_TYPE_POWER_SUPPLY_INFO: 
      return <PowerSupplyRow {...commonProps} options={options}/>

    case CHECKLIST_ROW_TYPE_SUCTION_SYSTEM: 
      return <SuctionSystemRow {...commonProps} options={options}/>

    case CHECKLIST_ROW_TYPE_DATE_NOTES: 
      return <DateNoteRow {...commonProps} options={options}/>

    case CHECKLIST_ROW_TYPE_CONFIGURATION_LAN: 
      return <ConfigurationLanRow {...commonProps} options={options}/>

    case CHECKLIST_ROW_TYPE_TOGGLE_NULL_CONFIRM_QTY: 
      return <ToggleConfirmRow {...commonProps} options={{...options, hasNa: true, hasQuantity: true}}/>

    case CHECKLIST_ROW_TYPE_INFO_AND_PRECAUTIONS: 
      return <InfoAndPrecautionsRow {...commonProps} options={options}/>

    default: throw new Error(`[ChecklistsDetailsParagraphView::getRow] Invalid row type = ${row.rowType}.`);
  }
};

const ChecklistsDetailsParagraph = ({data}) => {
  const {rows, order, name} = data;
  return (
    <div>
      <HeaderH2 dimension={'h2'} text={`${order} - ${name}` }/>
      <SyledList celled>
        {map((rowData) => getRow(rowData), rows || [])}
      </SyledList>
    </div>
  )
};

// PropTypes
ChecklistsDetailsParagraph.propTypes = {
};

export default ChecklistsDetailsParagraph;

