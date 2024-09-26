import * as types from "./fruitJar.types.tsx";
import { FruitJarItem } from "../../../types/fruit.tsx";

const initialState = {
  fruitJar: {
    data: [] as FruitJarItem[],
    totalCalories: 0,
  },
};

const fruitJarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_FRUIT_TO_JAR:
      const fruitIndex = state.fruitJar.data.findIndex(
        (fruit) => fruit.name === action.payload.name
      );
      let updatedData;

      if (fruitIndex === -1) {
        updatedData = [
          ...state.fruitJar.data,
          { ...action.payload, quantity: 1 },
        ];
      } else {
        updatedData = state.fruitJar.data.map((fruit, index) =>
          index === fruitIndex
            ? { ...fruit, quantity: fruit.quantity + 1 }
            : fruit
        );
      }

      const totalCalories = updatedData.reduce(
        (total, fruit) => total + fruit.nutritions.calories * fruit.quantity,
        0
      );
      console.log("🚀 ~ fruitJarReducer ~ totalCalories:", totalCalories);

      return {
        ...state,
        fruitJar: {
          ...state.fruitJar,
          data: updatedData,
          totalCalories,
        },
      };
    default:
      return state;
  }
};

export default fruitJarReducer;
