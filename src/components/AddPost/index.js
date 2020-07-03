import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { publishPost } from "../../api";
import { getCookie } from "../../helpers/cookies";
import { ReactComponent as Lock } from "../../assets/lock.svg";
// import unlock from "../../assets/unlock.svg";
import addImage from "../../assets/add-image.png";
import jsonwebtoken from "jsonwebtoken";

export class AddPost extends React.Component {
  state = {
    post: {
      title: "",
      text: "",
      isAnonym: false,
      created_at: new Date(),
      updated_at: new Date(),
    },

    lockColor: "",
    fileUpload: false,
    username: "",
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
      const token = getCookie("token");
      await publishPost(token, this.state.post);
      // const username = jsonwebtoken.decode(token).username;
      localStorage.removeItem("posts");
      history.push(`/profile/${this.state.username}`);
    } catch (error) {
      console.log(error);
    }
  };

  handleLock = () => {
    this.state.lockColor === ""
      ? this.setState({
          lockColor: "#009688ba",
          post: { ...this.state.post, isAnonym: true },
        })
      : this.setState({
          lockColor: "",
          post: { ...this.state.post, isAnonym: false },
        });
  };

  handleUploadVisibility = () => {
    this.setState({ fileUpload: !this.state.fileUpload });
  };

  handleFileUpload = (event) => {
    const files = event.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (event) => {
      console.log(event.target.result);
    };
  };

  componentWillMount() {
    const token = getCookie("token");
    const username = jsonwebtoken.decode(token).username;
    this.setState({ username });
  }

  render() {
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
          <div className="addPostBottomSection">
            <div className="addPostOptionsWrapper">
              <div title="add image">
                <img
                  className="addPostAddImage"
                  src={addImage}
                  onClick={this.handleUploadVisibility}
                />
              </div>
              <div
                title="make private"
                className="addPostLockWrapper"
                style={{ backgroundColor: this.state.lockColor }}
                onClick={this.handleLock}
              >
                <Lock />
              </div>
            </div>
            <div className="addPostButtonWrapper">
              <Link
                to={`/profile/${this.state.username}`}
                className="addPostCancelButton"
              >
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
          {this.state.fileUpload && (
            <input
              type="file"
              name="file"
              onChange={(event) => {
                this.handleFileUpload(event);
              }}
            />
          )}
        </div>
      </div>
    );
  }
}
