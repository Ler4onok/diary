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
        <Route path="/diary" exact component={Home} />
        <ProtectedRoute path="/settings" exact component={Settings} />
        <Route path="/profile/:username" component={Profile} exact />
        <ProtectedRoute path="/add-post" component={AddPost} exact />
      </Switch>
    );
  }
}
