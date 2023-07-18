const initialState = {
  filter: {
    category: "",
    price: "",
    brand: "",
    sort: "asc",
  },
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.payload.name]: action.payload.value,
        },
      };
    case SET_SORT_ORDER:
      return {
        ...state,
        filter: {
          ...state.filter,
          sort: action.payload,
        },
      };
    default:
      return state;
  }
};

export default filterReducer;
