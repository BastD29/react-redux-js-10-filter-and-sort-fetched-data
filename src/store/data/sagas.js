import { all, call, put, takeEvery } from "redux-saga/effects";
import { GetCampaigns } from "../../services/campaign.service";
import {
  FETCH_DATA_REQUEST,
  fetchDataFailure,
  fetchDataSuccess,
} from "./actions";

function* fetchDataSaga(action) {
  try {
    const data = yield call(GetCampaigns);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

function* watchFetchData() {
  yield takeEvery(FETCH_DATA_REQUEST, fetchDataSaga);
}

export default function* dataSaga() {
  yield all([watchFetchData()]);
}
