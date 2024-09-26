import * as types from "./types.tsx";

const initialState = {
  fruitsData: {
    tData: [],
    lData: [],
    isLoading: false,
    error: null,
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
        },
      };
    case types.FETCH_FRUITS_ERROR:
      return {
        ...state,
        fruitsData: {
          tData: [],
          lData: [],
          isLoading: false,
          error: action.payload,
        },
      };
    case types.GROUP_BY_FRUITS:
      const groupBy = action.payload;
      console.log("🚀 ~ fruitReducer ~ groupBy:", groupBy);
      const groupedData = state.fruitsData.tData.reduce(
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
      console.log("🚀 ~ fruitReducer ~ groupedData:", groupedData);
      return {
        ...state,
        fruitsData: {
          ...state.fruitsData,
          // lData: groupedData,
          isLoading: false,
        },
      };
    default:
      return state;
  }
};

export default fruitReducer;
