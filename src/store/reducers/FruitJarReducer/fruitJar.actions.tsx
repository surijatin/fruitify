import { Dispatch } from "redux";
import * as actionTypes from "./fruitJar.types";
import { FruitType } from "types/fruit";

export const addFruitToJar = (fruit: FruitType) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: actionTypes.ADD_FRUIT_TO_JAR, payload: fruit });
  };
};

export const removeFruitFromJar = (fruit: FruitType) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: actionTypes.REMOVE_FRUIT_FROM_JAR, payload: fruit });
  };
};

export const clearFruitJar = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: actionTypes.CLEAR_FRUIT_JAR });
  };
};
