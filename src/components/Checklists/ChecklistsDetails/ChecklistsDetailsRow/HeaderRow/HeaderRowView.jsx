import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Header} from '../../../../UI'
import {BackgroundLightGrey, ColorDarkGrey, HeaderFontHeight} from '../../../../style-utils'
import {StyledItem} from '../CommonRowWrapper/CommonRowWrapperView'

const Container = styled(StyledItem)`
  width: 100%;
  ${BackgroundLightGrey}
`

const StyledHeader = styled(Header)`
  ${ColorDarkGrey}
  ${HeaderFontHeight}
`

const HeaderRow = ({text}) => {
  return (
    <Container>
      <StyledHeader text={text} dimension={'h3'} />
    </Container>
  )
};

// PropTypes
HeaderRow.propTypes = {
  text: PropTypes.string.isRequired, 
};

export default HeaderRow;