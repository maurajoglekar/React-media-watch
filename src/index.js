import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./configureStore";
import MediaWatch from "./mediaWatch/views/MediaWatch";
import "./styles.css";

const App = () => (
  <Provider store={store}>
    <MediaWatch></MediaWatch>
  </Provider>
);

render(<App />, document.getElementById("root"));
