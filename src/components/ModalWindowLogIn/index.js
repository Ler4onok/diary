import React from "react";
import "./index.css";
import { signIn } from "../../api";
import { setCookie } from "../../helpers/cookies";

export class ModalWindowLogIn extends React.Component {
  state = {
    username: "",
    password: "",
  };

  getInputValue = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    console.log(this.props);
    return (
      <div className="modalWindowLogInWrapper">
        <div className="modalWindowLogIn">
          <div className="modalWindowLogInContentWrapper">
            <span className="modalWindowLogInText">Please, log in</span>
            <input
              className="modalWindowLogInInput"
              placeholder="Username"
              name="username"
              onChange={this.getInputValue}
            />
            <input
              className="modalWindowLogInInput"
              placeholder="Password"
              name="password"
              onChange={this.getInputValue}
            />
            <a className="modalWindowLogInSignUp">
              Not registrated yet? Sign up now!
            </a>
            <div className="modalWindowLogInButtonsWrapper">
              <div
                className="modalWindowLogInCloseButton"
                onClick={this.props.closeLogInModal}
              >
                Close
              </div>
              <button
                className="modalWindowLogInButton"
                onClick={async () => {
                  const { token } = await signIn(
                    this.state.username,
                    this.state.password
                  );
                  setCookie("token", token);
                  this.props.history.push(`/profile/${this.state.username}`);
                }}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
