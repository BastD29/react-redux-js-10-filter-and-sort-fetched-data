export const SET_FILTER = "SET_FILTER";
export const SET_SORT_ORDER = "SET_SORT_ORDER";

export const setFilter = (name, value) => ({
  type: SET_FILTER,
  payload: { name, value },
});

export const setSortOrder = (order) => ({
  type: SET_SORT_ORDER,
  payload: order,
});
