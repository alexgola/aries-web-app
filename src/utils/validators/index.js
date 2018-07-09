import moment from "moment";

export const isNaN = value => (!isNaN(value) && typeof value === 'number');
export const isValidMonthIndex = monthIndex => (monthIndex >= 1 &&  monthIndex <= 12);
export const isValidYear = year => (year >= 1990 &&  year <= (moment().year() + 100));