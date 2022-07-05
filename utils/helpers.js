module.exports = {
  // takes in a timestamp and return a string with only the time
  format_date: (date) => {
    return date.toLocaleDateString();
  },
};