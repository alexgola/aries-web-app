import React from 'react'
import { Header } from 'semantic-ui-react'

const MyHeader = ({text, dimension}) => (
    <Header as={dimension}>{text}</Header>
)

export default MyHeader
