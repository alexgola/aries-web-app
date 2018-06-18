import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Header} from '../../../../UI'
import {BackgroundDarkGrey} from '../../../../style-utils'
import {StyledItem} from '../CommonRowWrapper/CommonRowWrapperView'

const Container = styled(StyledItem)`
  width: 100%;
  ${BackgroundDarkGrey}
`

const StyledHeader = styled(Header)`
  color: white!important;
  font-weight: 300!important;
`

const HeaderRow = ({text}) => {
  return (
    <Container>
      <StyledHeader text={text} />
    </Container>
  )
};

// PropTypes
HeaderRow.propTypes = {
  text: PropTypes.string.isRequired, 
};

export default HeaderRow;