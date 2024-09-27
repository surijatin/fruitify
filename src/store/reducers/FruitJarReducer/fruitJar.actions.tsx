import { Dispatch } from "redux";
import * as types from "./fruitJar.types";
import { FruitType } from "../../../types/fruit";

export const addFruitToJar = (fruit: FruitType) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: types.ADD_FRUIT_TO_JAR, payload: fruit });
  };
};

export const removeFruitFromJar = (fruit: FruitType) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: types.REMOVE_FRUIT_FROM_JAR, payload: fruit });
  };
};

export const clearFruitJar = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: types.CLEAR_FRUIT_JAR });
  };
};
