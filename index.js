const addDays = require("date-fns/addDays");
const days = (d) => {
  const result = addDays(new Date(2020, 7, 22), d);
  return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`;
};
module.exports = days;
