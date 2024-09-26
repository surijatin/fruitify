import { Dispatch } from "redux";
import axios from "axios";
import * as types from "./types.tsx";

export const fetchFruits = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: types.FETCH_FRUITS_REQUEST });
    try {
      const response = await axios.get(
        "https://www.fruityvice.com/api/fruit/all"
      );
      dispatch({ type: types.FETCH_FRUITS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: types.FETCH_FRUITS_ERROR, error });
    }
  };
};

export const fetchFruitsByGroup = (groupBy: string) => {
  console.log("🚀 ~ fetchFruitsByGroup ~ groupBy:", groupBy);
  return (dispatch: Dispatch) => {
    console.log("Dispatching GROUP_BY_FRUITS with payload:", groupBy);
    dispatch({ type: types.GROUP_BY_FRUITS, payload: groupBy });
    console.log("Dispatched GROUP_BY_FRUITS action");
  };
};
