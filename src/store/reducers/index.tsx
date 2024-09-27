import { combineReducers } from "redux";
import fruitReducer from "./FruitMenuReducer/fruitMenu.reducer";
import fruitJarReducer from "./FruitJarReducer/fruitJar.reducer";

const rootReducer = combineReducers({
  fruitReducer: fruitReducer,
  fruitJarReducer: fruitJarReducer,
});

export default rootReducer;
