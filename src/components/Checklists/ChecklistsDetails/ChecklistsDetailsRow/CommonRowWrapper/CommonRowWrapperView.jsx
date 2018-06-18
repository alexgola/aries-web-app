import React from 'react'
import PropTypes from 'prop-types'
import List from '../../../../UI/List'
import Description from '../CommonDescription'
import styled from 'styled-components'
import {dataShape} from './prop-types'

export const StyledItem = styled(List.Item)`
  padding: 10px 20px!important;
`
const StyledComponentCnt = styled.div`
  margin: 15px 0;
`

const CommonRowWrapper = (Component) => ({data, onChange, options}) => {

  const {description, employeeIndications} = data; 
  return (
    <StyledItem>
      <Description value={description}/>
      <StyledComponentCnt> 
        <Component onChange={onChange} data={data.data} options={options}/> 
      </StyledComponentCnt>
      {employeeIndications}
    </StyledItem>
  )
};

// PropTypes
CommonRowWrapper.propTypes = {
  data: PropTypes.object.isRequired, 
  onChange: PropTypes.func.isRequired, 
  options: PropTypes.object
};

export default CommonRowWrapper;