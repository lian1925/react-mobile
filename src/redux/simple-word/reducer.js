const initial = {
  pagination: {
    current: 1,
    pageSize: 10
  },
  filterResult: {}
};

export const simpleWord = (state = initial, action) => {
  switch (action.type) {
    case "SET_SIMPLE_WORD":
      let res = Object.assign({}, state, action.value);
      console.log(123, res);
      return res;
    default:
      return state;
  }
};
