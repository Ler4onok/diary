import React from "react";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";
import { AddPost } from "./components/AddPost";
import { Link, Switch, Route } from "react-router-dom";

export class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" render={(props) => <Profile {...props} />} />
        <Route path="/add-post" render={(props) => <AddPost {...props} />} />
      </Switch>
    );
  }
}
