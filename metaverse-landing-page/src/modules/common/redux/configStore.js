import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { namespace as AddressNamespace } from "./address/slice";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [AddressNamespace],
  blacklist: [],
};

const root = persistReducer(persistConfig, rootReducer);

export const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: root,
  middleware: [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store, {});
