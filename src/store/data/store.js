import { applyMiddleware, legacy_createStore as createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import dataSaga from "./sagas";
import dataReducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(dataReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(dataSaga);

export default store;
