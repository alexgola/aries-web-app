import styled from 'styled-components'
import {media} from './style-utils'

export const PageContent = styled.div`
  width: 100%;

  ${media.tablet`
    width: 100%;
  `}
  ${media.desktop`
    max-width: 1280px;
    margin: 0 auto;
  `}
`