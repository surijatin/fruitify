import * as types from "./fruitJar.types";
import { FruitJarItem } from "../../../types/fruit";
import toast from "react-hot-toast";

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

      toast.success(
        `${action.payload.name} added to jar. Qty: ${
          fruitIndex === -1 ? 1 : state.fruitJar.data[fruitIndex].quantity + 1
        }`,
        {
          duration: 2000,
          position: "top-center",
          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
          className: "text-lg",
        }
      );

      return {
        ...state,
        fruitJar: {
          ...state.fruitJar,
          data: updatedData,
          totalCalories,
        },
      };
    case types.REMOVE_FRUIT_FROM_JAR:
      const fruitIndexToRemove = state.fruitJar.data.findIndex(
        (fruit) => fruit.name === action.payload.name
      );

      let updatedDataAfterRemove;
      if (fruitIndexToRemove !== -1) {
        if (state.fruitJar.data[fruitIndexToRemove].quantity > 1) {
          updatedDataAfterRemove = state.fruitJar.data.map((fruit, index) =>
            index === fruitIndexToRemove
              ? { ...fruit, quantity: fruit.quantity - 1 }
              : fruit
          );
        } else {
          updatedDataAfterRemove = state.fruitJar.data.filter(
            (fruit, index) => index !== fruitIndexToRemove
          );
        }

        const totalCaloriesAfterRemove = updatedDataAfterRemove.reduce(
          (total, fruit) => total + fruit.nutritions.calories * fruit.quantity,
          0
        );

        if (
          fruitIndexToRemove !== -1 &&
          state.fruitJar.data[fruitIndexToRemove].quantity === 1
        ) {
          toast(`${action.payload.name} removed from jar.`, {
            duration: 2000,
            position: "top-center",
            ariaProps: {
              role: "status",
              "aria-live": "polite",
            },
            className: "text-lg",
            icon: "🚨",
          });
        }

        return {
          ...state,
          fruitJar: {
            ...state.fruitJar,
            data: updatedDataAfterRemove,
            totalCalories: totalCaloriesAfterRemove,
          },
        };
      }
      return state;

    case types.CLEAR_FRUIT_JAR:
      toast("Fruit jar cleared.", {
        duration: 3000,
        position: "top-center",
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
        className: "text-lg",
        icon: "🗑️",
      });
      return {
        ...state,
        fruitJar: {
          data: [],
          totalCalories: 0,
        },
      };

    default:
      return state;
  }
};

export default fruitJarReducer;
