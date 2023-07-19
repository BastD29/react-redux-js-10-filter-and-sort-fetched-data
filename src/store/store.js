import { applyMiddleware, legacy_createStore as createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import campaignReducer from "./reducer";
import campaignSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(campaignReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(campaignSaga);

export default store;
