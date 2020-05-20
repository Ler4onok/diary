import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { publishPost } from "../../api";

export class AddPost extends React.Component {
  state = {
    post: {
      title: "",
      text: "",
      isAnonym: false,
    },
  };

  handleTitleValue = (event) => {
    this.setState({ post: { ...this.state.post, title: event.target.value } });
  };

  handleTextValue = (event) => {
    this.setState({ post: { ...this.state.post, text: event.target.value } });
  };

  handlePublishPostRequest = async () => {
    const { history } = this.props;
    try {
      await publishPost(this.state.post);
      history.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this.props);
    return (
      <div className="addPostPage">
        <div className="addPostWrapper">
          <input
            className="addPostTitle"
            placeholder="Add title"
            onChange={this.handleTitleValue}
          ></input>
          <textarea
            className="postBody"
            placeholder="Add text"
            onChange={this.handleTextValue}
          ></textarea>
          <div className="addPostButtonWrapper">
            <Link to="/profile" className="addPostCancelButton">
              Cancel
            </Link>
            <button
              className="addPostPublishButton"
              onClick={this.handlePublishPostRequest}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    );
  }
}
