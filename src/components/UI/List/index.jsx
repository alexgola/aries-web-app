import React from 'react'
import PropTypes from 'prop-types';
import {List as SemanticList, Ref} from 'semantic-ui-react'
import styled from 'styled-components'
import {NoMarginTop} from '../../../styles'

const StyledList = styled(SemanticList)`
  ${NoMarginTop}
  transition: height 1s ease-in-out;
  overflow: hidden;
  height: auto;
  &.collapsed {
    height: 0px;
  }
`

class MyList extends React.Component {

  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  handleOnCollapsed = (isCollapsed) => {
    if(this.ref){
      if (isCollapsed) {
        this.ref.classList.add("collapsed")
      } else {
        this.ref.classList.remove("collapsed");
      }
    }
  }

  shouldComponentUpdate(nextProps) {
    this.handleOnCollapsed(nextProps.isCollapsed);
    return false;
  }



  render() {
    const {isCollapsed, ...rest} = this.props;
    return (
      <Ref innerRef={(node) => { this.ref = node }}>
        <StyledList 
          innerRef={this.ref}
          className={isCollapsed ? 'collapsed' : ''}
          {...rest} />
      </Ref>)
  }
};

MyList.propTypes = {
  isCollapsed: PropTypes.bool,
};

MyList.Item = SemanticList.Item;
MyList.Header = SemanticList.Header;

export const List = MyList;