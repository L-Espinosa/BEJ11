function convertLocalDate(date) {
    const newDate = new Date(date.getTime() - date.getTimezoneOffset()*60*1000);
    return newDate   
}

module.exports = convertLocalDate;
