import { Dispatch } from "redux";
import axios from "axios";
import * as types from "./fruitMenu.types.tsx";

export const fetchFruits = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: types.FETCH_FRUITS_REQUEST });
    try {
      const response = await axios.get(
        "https://www.fruityvice.com/api/fruit/all"
      );
      dispatch({ type: types.FETCH_FRUITS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: types.FETCH_FRUITS_ERROR, payload: error.message });
    }
  };
};

export const fetchFruitsByGroup = (groupBy: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: types.GROUP_BY_FRUITS, payload: groupBy });
  };
};
