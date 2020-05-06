import React from "react";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";
import { AddPost } from "./components/AddPost";
import { Link, Switch, Route } from "react-router-dom";

export class Routes extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/add-post">Add Post</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/profile" render={(props) => <Profile {...props} />} />
          <Route path="/add-post">
            <AddPost />
          </Route>
        </Switch>
      </div>
    );
  }
}
