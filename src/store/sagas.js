import { all, call, put, takeEvery } from "redux-saga/effects";
import { FETCH_DATA_REQUEST } from "./constants";
import { fetchDataFailure, fetchDataSuccess } from "./actions";
import { GetCampaigns } from "../services/campaign.service";

function* fetchCampaignSaga() {
  try {
    const data = yield call(GetCampaigns);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

function* watchFetchCampaignSaga() {
  yield takeEvery(FETCH_DATA_REQUEST, fetchCampaignSaga);
}

export default function* campaignSaga() {
  yield all([watchFetchCampaignSaga()]);
}
