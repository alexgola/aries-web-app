import React from 'react'
import { Header } from 'semantic-ui-react'

const MyHeader = ({text, dimension, className}) => (
    <Header className={className} as={dimension}>{text}</Header>
)

export default MyHeader
