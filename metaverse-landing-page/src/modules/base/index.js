import { createBrowserHistory } from "history";
const history = createBrowserHistory();
export { default as PrivateRoute } from "./components/PrivateRoute";
export { default as AppLayout } from "./components/AppLayout";
export * from "./redux/storeConfig";
export { history };
