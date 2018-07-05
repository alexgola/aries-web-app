import React from 'react'
import PropTypes from 'prop-types'
import {List} from '../../../../UI'
import Description from '../CommonDescription'
import styled from 'styled-components'
import { CardPadding } from '../../../../../styles'

export const StyledItem = styled(List.Item)`
  ${CardPadding}
`
const StyledComponentCnt = styled.div`
  margin: 5px 0;
`
const EmployeeIndicationsCnt = styled.div`
  margin-top: 5px;
`

const CommonRowWrapper = (Component) => ({data, onChange, options, rowIndex, paragraphIndex}) => {
  const {description, employeeIndications} = data

  return (
    <StyledItem>
      <Description value={description}/>
      <StyledComponentCnt> 
        <Component onChange={(data) => onChange({data: {nameValuePairs: data}, rowIndex, paragraphIndex})} data={data.data.nameValuePairs} options={options}/> 
      </StyledComponentCnt>
      <EmployeeIndicationsCnt>{employeeIndications}</EmployeeIndicationsCnt>
    </StyledItem>
  )
};

// PropTypes
CommonRowWrapper.propTypes = {
  data: PropTypes.object.isRequired, 
  rowIndex: PropTypes.number.isRequired,
  paragraphIndex: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired, 
  options: PropTypes.object,
};

export default CommonRowWrapper;