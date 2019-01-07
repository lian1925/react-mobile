const stringtomore = (str, length = 15) => {
  if (str.length <= length) {
    return str;
  }
  const result = str.substring(0, length - 2) + "...";
  return result;
};
const numbertostring = num => {
  return ("0" + num).slice(-2);
};
export { stringtomore, numbertostring };
