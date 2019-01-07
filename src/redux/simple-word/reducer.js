const initial = {
  pagination: {},
  filterResult: {}
};

export const simpleWord = (state = initial, action) => {
  switch (action.type) {
    case "SET":
      let res = Object.assign({}, state, action.value);
      console.log(123, res);
      return res;
    default:
      return state;
  }
};
