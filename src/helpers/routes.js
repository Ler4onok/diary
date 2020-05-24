import React from "react";
import { withRouter } from "react-router-dom";
import { getCookie } from "./cookies";

class Protected extends React.Component {
  componentWillMount() {
    const token = getCookie("token");
    if (!token) {
      const { history } = this.props;
      return history.push("/");
    }
  }

  render() {
    const { component: Component } = this.props;
    return <Component {...this.props} />;
  }
}

const ProtectedRoute = withRouter(Protected);

export { ProtectedRoute };
