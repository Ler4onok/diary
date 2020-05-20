import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export class Profile extends React.Component {
  render() {
    return (
      <>
        <header className="homeHeader">
          <div className="homeHeader">
            <Link to="/" className="homeHeaderElement">
              Home
            </Link>
            <Link to="/add-post" className="homeHeaderProfileWrapper">
              <div className="testButton">
                <button className="icon-btn add-btn">
                  <div className="add-icon"></div>
                  <div className="btn-txt">Add post</div>
                </button>
              </div>
            </Link>
          </div>
        </header>
      </>
    );
  }
}
