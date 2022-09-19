import { createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";

const logger = createLogger();
const saga = createSagaMiddleWare();

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(saga, logger))
);

saga.run(rootSaga);

export default store;
