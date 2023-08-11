import React from "react";
import ReactDOM from "react-dom";
import { routes } from "./routes";
import "./modules/caches";

import { Web3ReactProvider } from "@web3-react/core";
import "tw-elements";

import App from "./App";
// import AppConnectWalletWrapper from "./components/AppConnectWalletWrapper";

import { LIBRARY_CONSTANTS } from "./modules/common/library";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "react-quill/dist/quill.snow.css";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./modules/base";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App routes={routes} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
