import { isNaN } from "../validators";

export const stringToFloat = (value) => {
  if(value === '')  return null;
  const parseFloat = parseFloat(value)
  if((!isNaN(parseFloat) && typeof parseFloat === 'number')) {
    return parseFloat;
  }
  return null;
}