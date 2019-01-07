import { combineReducers } from "redux";

import { simpleWord } from "./simple-word/reducer";
const reducer = combineReducers({
  simpleWord
});
export default reducer;
