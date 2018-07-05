import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import { LeftButton } from './prop-types';
import { CenterVertically } from '../../styles';
import { Button, Icon } from '../UI';

export const createLeftButtons = ({ref, caption, onClick, isLoading, icon, animated, primary, secondary}) => {
  return {
    ref,
    caption,
    onClick,
    isLoading,
    icon,
    primary,
    animated,
    secondary,
  }
};

const MainContainer = styled.div`
  position: relative;
  height: 50px;
  width:100%;
`
const LeftContainer = styled.div`
  right: 0;
  ${CenterVertically}
`

const TypedButton = ({caption, icon, animated, primary, secondary}) => {

  const attr = {}
  let isAnimated = false;

  if(primary === true) attr.primary = true;
  else if(secondary === true) attr.secondary = true;
  
  if(animated !== undefined) {
    isAnimated = true;
    attr.animated = animated;
  }
  
  if(!isAnimated){
    return <Button {...attr}>
      {caption}
    </Button>;
  } else {
    return <Button {...attr}>
      <Button.Content hidden>{caption}</Button.Content>
      <Button.Content visible>
        <Icon name={icon} />
      </Button.Content>
    </Button>;
  }
}

const ActionsBar = ({leftButtons}) => {

  return (
    <MainContainer>
      <LeftContainer>
        {leftButtons.map((button) => {
          const { ref, ...rest } = button;
          return <TypedButton key={ref} {...rest}/>
        })}
      </LeftContainer> 
    </MainContainer>
  )
}

ActionsBar.propTypes = {
  leftButtons: PropTypes.arrayOf(LeftButton).isRequired,
}

export default injectIntl(ActionsBar)
