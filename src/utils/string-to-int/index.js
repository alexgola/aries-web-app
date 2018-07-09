import { isNaN } from "../validators";

export const stringToInt = (value) => {
  if(value === '')  return null;
  const intValue = parseInt(value, 10)
  if((!isNaN(intValue) && typeof intValue === 'number')) {
    return intValue;
  }
  return null;
}