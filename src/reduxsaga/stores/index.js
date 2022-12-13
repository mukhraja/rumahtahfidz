import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleWare from "redux-saga";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers";
import rootSaga from "../middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const logger = createLogger();
const saga = createSagaMiddleWare();

const store = createStore(
  persistedReducer,
  undefined,
  composeWithDevTools(applyMiddleware(saga, logger))
);

let persistor = persistStore(store);

saga.run(rootSaga);

export { store, persistor };
