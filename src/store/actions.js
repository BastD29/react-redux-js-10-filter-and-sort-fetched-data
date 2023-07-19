import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  SET_FILTER,
  SET_SORT,
} from "./constants";

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const setFilter = (filterType, filterValue) => ({
  type: SET_FILTER,
  payload: { filterType, filterValue },
});

export const setSort = (sortOrder) => ({
  type: SET_SORT,
  payload: sortOrder,
});
