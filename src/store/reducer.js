import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  SET_FILTER,
  SET_SORT,
} from "./constants";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  filter: {
    status: "all",
    statusCode: "all",
    statusPercentage: "all",
  },
  sort: "asc",
};

const campaignReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.payload.filterType]: action.payload.filterValue,
        },
      };
    case SET_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    default:
      return state;
  }
};

export default campaignReducer;
