import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import createRootReducer from "./reducers";
import rootSaga from "./sagas";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "marvelFightClub",
  storage,
  blacklist: ["router", "characters"]
};

const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history)
);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(routerMiddleware(history)),
    applyMiddleware(sagaMiddleware)
  )
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
