import { combineReducers } from "redux";
import dataReducer from "./data/reducer";
import filterReducer from "./filter/reducer";

const rootReducer = combineReducers({
  data: dataReducer,
  filter: filterReducer,
});

export default rootReducer;
