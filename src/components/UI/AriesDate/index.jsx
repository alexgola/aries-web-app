import React from 'react'
import PropTypes from 'prop-types'
import { Header, Icon } from 'semantic-ui-react'
import moment from 'moment'

/**
 * Component to format date
 * 
 * @param {*} param0 
 * @param {number} param0.unixTimestamp - milliseconds
 */
const AriesDate = ({format, unixTimestamp}) => {
  const mFormat = format || 'L'
  return (moment(unixTimestamp).format(mFormat))
}

AriesDate.propTypes = {
    format: PropTypes.string, 
    unixTimestamp: PropTypes.number.isRequired
};

export default AriesDate
