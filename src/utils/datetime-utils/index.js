import moment from 'moment'

export const getDateByUnixtimestamp = ({format, unixTimestamp}) => {
  const mFormat = format || 'L'
  return (moment(unixTimestamp).format(mFormat))
}