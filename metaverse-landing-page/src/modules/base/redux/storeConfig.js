import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import ReducerRegistry from "./ReducerRegistry";

let middlewares = [thunk];
if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["caches"],
};
const reducers = ReducerRegistry.combineReducers(persistConfig);

const store = createStore(reducers, applyMiddleware(...middlewares));

const persistor = persistStore(store, {}, () => {});
export {store , persistor};