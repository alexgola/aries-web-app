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
      case 1: monthStringId = 'JANUARY'; break;
      case 2: monthStringId = 'FEBRUARY'; break;
      case 3: monthStringId = 'MARCH'; break;
      case 4: monthStringId = 'APRIL'; break;
      case 5: monthStringId = 'MAY'; break;
      case 6: monthStringId = 'JUNE'; break;
      case 7: monthStringId = 'JULY'; break;
      case 8: monthStringId = 'AUGUST'; break;
      case 9: monthStringId = 'SEPTEMBER'; break;
      case 10: monthStringId = 'OCTOBER'; break;
      case 11: monthStringId = 'NOVEMBER'; break;
      case 12: monthStringId = 'DECEMBER'; break;
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