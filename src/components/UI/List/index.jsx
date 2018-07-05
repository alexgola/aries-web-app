import React from 'react'
import PropTypes from 'prop-types';
import {List as SemanticList} from 'semantic-ui-react'
import styled from 'styled-components'
import {NoMarginTop} from '../../../styles'

const StyledList = styled(SemanticList)`
  ${NoMarginTop}
  transition: height 1s ease-in-out;
  overflow: hidden;
`

const CollapsedList = styled(StyledList)`
  height: 0px;
`

const ExpandedList = styled(StyledList)`
  height: auto;
`

const MyList = ({ isCollapsed, ...rest}) => (
  isCollapsed
    ? <CollapsedList {...rest} />
    : <ExpandedList {...rest} />
);

MyList.propTypes = {
  isCollapsed: PropTypes.bool,
};

MyList.Item = SemanticList.Item;
MyList.Header = SemanticList.Header;

export const List = MyList;