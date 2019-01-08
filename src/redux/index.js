import { combineReducers } from "redux";

import { simpleWord } from "./simple-word/reducer";
import { videoWord } from "./video-word/reducer";
const reducer = combineReducers({
  simpleWord,
  videoWord
});
export default reducer;
