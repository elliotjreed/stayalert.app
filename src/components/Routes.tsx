import { createBrowserHistory } from "history";
import * as React from "react";
import { Route, Router, Switch } from "react-router-dom";

import { Spinner } from "./Spinner";
import "./../assets/scss/App.scss";
import { TopBar } from "./TopBar";

const Home = React.lazy((): Promise<any> => import(/* webpackChunkName: "home" */ "./Home"));
const Twitter = React.lazy((): Promise<any> => import(/* webpackChunkName: "twitter" */ "./Twitter"));
const PageNotFound = React.lazy((): Promise<any> => import(/* webpackChunkName: "pagenotfound" */ "./PageNotFound"));

const history = createBrowserHistory();

export const Routes = (): Router => {
  return (
    <Router history={history}>
      <TopBar />
      <React.Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/stay-alert" component={Home} />
          <Route exact={true} path="/tweet" component={Twitter} />
          <Route component={PageNotFound} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};
