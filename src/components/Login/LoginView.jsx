import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {injectIntl, intlShape, defineMessages} from 'react-intl'
import Header from '../UI/Header'
import Icon from '../UI/Icon'
import Input from '../UI/Input'
import PrimaryButton from '../UI/PrimaryButton'

const messages = defineMessages({
  welcome: {id: 'WELCOME_TO_ARIES'},
  username: {id: 'USERNAME'},
  password: {id: 'PASSWORD'},
  login: {id: 'LOGIN'}
})

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0px;
`

const FormContainer = styled.div`
  display: inline-block;
  text-align: center;
  width:100%;
  max-width:350px;
`

const IconContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`

const Field = styled.div`
  display: block;
  margin-bottom: 20px;
`

const Login = ({onFileUpload, intl, file}) => {

  const {formatMessage} = intl;

  return (
    <MainContainer>
      <FormContainer>
        <Header 
          text={formatMessage(messages.welcome)}>
        </Header>
        <IconContainer>
          <Icon 
            name="user circle"
            size="massive">
          </Icon>
        </IconContainer>

        <Field>
          <Input  
            fluid={true}
            icon='user' 
            size='large' 
            iconPosition='left' 
            placeholder={formatMessage(messages.username)} />
        </Field>
        <Field>
          <Input 
            fluid={true}
            icon='lock' 
            size='large' 
            iconPosition='left' 
            placeholder={formatMessage(messages.password)} />
        </Field>
        <PrimaryButton
          fluid={true}
          size='large'
          text={formatMessage(messages.login)}>
        </PrimaryButton>
      </FormContainer>
    </MainContainer>
  )
};

// PropTypes
Login.propTypes = {
  intl: intlShape.isRequired,
};


export default injectIntl(Login);