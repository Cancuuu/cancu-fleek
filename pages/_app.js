import "../styles/globals.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import filterReducer from "../redux/duck";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  filterReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
