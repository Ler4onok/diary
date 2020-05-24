import React from "react";
import "./index.css";

export class ModalWindowLogIn extends React.Component {
  render() {
    return (
      <div className="modalWindowLogInWrapper">
        <div className="modalWindowLogIn">
          <div className="modalWindowLogInContentWrapper">
            <span className="modalWindowLogInText">Please, log in</span>
            <input className="modalWindowLogInInput" placeholder="Username" />
            <input className="modalWindowLogInInput" placeholder="Password" />
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
              <button className="modalWindowLogInButton">Log in</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
