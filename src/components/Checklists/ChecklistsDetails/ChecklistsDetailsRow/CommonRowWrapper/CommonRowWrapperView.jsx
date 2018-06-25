import React from 'react'
import PropTypes from 'prop-types'
import List from '../../../../UI/List'
import Description from '../CommonDescription'
import styled from 'styled-components'
import { CardPadding } from '../../../../style-utils';

export const StyledItem = styled(List.Item)`
  ${CardPadding}
`
const StyledComponentCnt = styled.div`
  margin: 15px 0;
`

const CommonRowWrapper = (Component) => ({data, onChange, options}) => {
  const {description, employeeIndications} = data
  return (
    <StyledItem>
      <Description value={description}/>
      <StyledComponentCnt> 
        <Component onChange={onChange} data={data.data.nameValuePairs} options={options}/> 
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