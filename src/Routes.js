import React from "react";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";
import { AddPost } from "./components/AddPost";
import { Settings } from "./components/Settings";
import { Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "./helpers/routes";

export class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <ProtectedRoute path="/settings" exact component={Settings} />
        <ProtectedRoute path="/profile" component={Profile} exact />
        <ProtectedRoute path="/add-post" component={AddPost} exact />
      </Switch>
    );
  }
}
