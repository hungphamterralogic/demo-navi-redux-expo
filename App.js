import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import AppNavigator from "./src/AppNavigator";
import reducers from "./src/reducers";

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
