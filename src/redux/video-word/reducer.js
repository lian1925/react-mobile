const initial = {
  pagination: {
    current: 1,
    pageSize: 10
  },
  filterResult: {}
};

export const videoWord = (state = initial, action) => {
  switch (action.type) {
    case "SET_VIDEO_WORD":
      let res = Object.assign({}, state, action.value);
      console.log(123, res);
      return res;
    default:
      return state;
  }
};
