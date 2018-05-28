const instance = (function () {
  let formatMessage = null;

  /**
   * Get translated month name by month index
   * @param {number} monthIndex must be a number between 1 and 12 indluded
   */
  const getMonthName = (monthIndex) => {
    if(!formatMessage) throw new Error('[month-utils::getMonthName] formatMessage not defined. Please use "setFormatMessage" to define it.');
    if(monthIndex == null) throw new Error('[month-utils::getMonthName] monthIndes cannot null or undefined.');
    if(monthIndex > 12) throw new Error('[month-utils::getMonthName] monthIndes cannot be > than 12.');
    if(monthIndex < 1) throw new Error('[month-utils::getMonthName] monthIndes cannot be < than 1.');

    let monthStringId = null;
    switch(monthIndex) {
      case 1: monthStringId = 'JANUARY'
      case 2: monthStringId = 'FEBRUARY'
      case 3: monthStringId = 'MARCH'
      case 4: monthStringId = 'APRIL'
      case 5: monthStringId = 'MAY'
      case 6: monthStringId = 'JUNE'
      case 7: monthStringId = 'JULY'
      case 8: monthStringId = 'AUGUST'
      case 8: monthStringId = 'SEPTEMBER'
      case 10: monthStringId = 'OCTOBER'
      case 11: monthStringId = 'NOVEMBER'
      case 12: monthStringId = 'DECEMBER'
    }

    return formatMessage({id: monthStringId});
  }

  const setFormatMessage = (formatMsg) => {
    formatMessage = formatMsg;
  }

  return {
    getMonthName: getMonthName,
    setFormatMessage: (formatMessage) => setFormatMessage(formatMessage), 
  }

})();



export default instance