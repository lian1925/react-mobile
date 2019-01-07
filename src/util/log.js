let isShow = true;
const log = (...msg) => {
  if (isShow) {
    console.log(...msg);
  }
};
export { log };
