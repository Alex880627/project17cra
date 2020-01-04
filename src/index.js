import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./js/components/app";
import NoMatch from "./js/components/presentational/no-match/no-match";
import './index.css'
require('dotenv').config();

import * as serviceWorker from "./js/services/serviceWorker";
import configureStore from "./js/store/configure-store";

const store = configureStore();

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Switch>
        {<Route exact path="/" component={App} />}
        <Route path="*" component={NoMatch} />
      </Switch>
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
