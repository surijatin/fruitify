import { combineReducers } from "redux";
import fruitReducer from "./FruitsReducer/index.tsx";

const rootReducer = combineReducers({
  fruitReducer: fruitReducer,
});

export default rootReducer;
