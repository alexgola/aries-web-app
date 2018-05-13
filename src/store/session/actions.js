import {
  
} from './actions.types'
import client from '../../utils/gateway-client'



const requestCalculateDose = (data) => {
  return {
    type: CALCULATE_DOSE_PENDING,
    payload: { data }
  }
}
const requestCalculateDoseFail = (error) => {
  return {
    type: CALCULATE_DOSE_ERROR,
    payload: { error }
  }
}
const requestCalculateDoseSuccess = (result) => {
  return {
    type: CALCULATE_DOSE_COMPLETED,
    payload: { result }, 
  }
}

export const calculateDose = (data) => {
  return (dispatch) => {
    dispatch(requestCalculateDose(data))
    return client.calculateDose(data)
      .then((result)=> {
          dispatch(requestCalculateDoseSuccess(result))
      })
      .catch((err) => {
          dispatch(requestCalculateDoseFail(err))
      })
  }
}

export const resetCalculateDose = (result) => {
  return {
    type: CALCULATE_DOSE_RESET,
  }
}