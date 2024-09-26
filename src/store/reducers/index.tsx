import { combineReducers } from "redux";
import fruitReducer from "./FruitMenuReducer/fruitMenu.reducer.tsx";
import fruitJarReducer from "./FruitJarReducer/fruitJar.reducer.tsx";

const rootReducer = combineReducers({
  fruitReducer: fruitReducer,
  fruitJarReducer: fruitJarReducer,
});

export default rootReducer;
