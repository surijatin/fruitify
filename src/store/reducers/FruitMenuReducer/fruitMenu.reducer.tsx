import * as types from "./fruitMenu.types";
import toast from "react-hot-toast";

const initialState = {
  fruitsData: {
    tData: [],
    lData: [],
    isLoading: false,
    error: null,
    groupBy: "",
  },
};

const fruitReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_FRUITS_REQUEST:
      return {
        ...state,
        fruitsData: {
          ...state.fruitsData,
          isLoading: true,
        },
      };
    case types.FETCH_FRUITS_SUCCESS:
      return {
        ...state,
        fruitsData: {
          tData: action.payload,
          lData: action.payload,
          isLoading: false,
          error: null,
          groupBy: "",
        },
      };
    case types.FETCH_FRUITS_ERROR:
      toast.error(`Failed to fetch fruits data: ${action.payload}`);
      return {
        ...state,
        fruitsData: {
          tData: [],
          lData: [],
          isLoading: false,
          error: action.payload,
          groupBy: "",
        },
      };
    case types.GROUP_BY_FRUITS:
      const groupBy = action.payload;
      let groupedData;
      if (groupBy === "") {
        groupedData = state.fruitsData.tData;
      } else {
        groupedData = state.fruitsData.tData.reduce(
          (acc: Record<string, typeof state.fruitsData.tData>, fruit) => {
            const key = fruit[groupBy];
            if (!acc[key]) {
              acc[key] = [];
            }
            acc[key].push(fruit);
            return acc;
          },
          {} as Record<string, typeof state.fruitsData.tData>
        );
      }
      return {
        ...state,
        fruitsData: {
          ...state.fruitsData,
          lData: groupedData,
          isLoading: false,
          groupBy: action.payload,
        },
      };
    default:
      return state;
  }
};

export default fruitReducer;
