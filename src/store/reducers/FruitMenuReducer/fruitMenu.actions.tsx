import { Dispatch } from "redux";
import axios from "axios";
import * as types from "./fruitMenu.types";

export const fetchFruits = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: types.FETCH_FRUITS_REQUEST });
    try {
      const response = await axios.get(
        "https://www.fruityvice.com/api/fruit/all"
      );
      dispatch({ type: types.FETCH_FRUITS_SUCCESS, payload: response.data });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: types.FETCH_FRUITS_ERROR, payload: error.message });
      } else {
        dispatch({
          type: types.FETCH_FRUITS_ERROR,
          payload: "An unknown error occurred",
        });
      }
    }
  };
};

export const fetchFruitsByGroup = (groupBy: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: types.GROUP_BY_FRUITS, payload: groupBy });
  };
};
