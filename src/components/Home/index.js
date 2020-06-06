import React from "react";
import { getPosts } from "../../api";
import "./index.css";
import profileButtonImg from "../../assets/profileImg.png";
import { Link } from "react-router-dom";
import { getCookie } from "../../helpers/cookies";
import { ModalWindowLogIn } from "../ModalWindowLogIn";
import jsonwebtoken from "jsonwebtoken";

export class Home extends React.Component {
  state = {
    posts: [],
    isAuthorized: false,
    limit: 3,
    isOpenRequireLogInModal: false,
    username: "",
  };

  closeLogInModal = () => {
    this.setState({ isOpenRequireLogInModal: false });
  };

  async componentDidMount() {
    const posts = await getPosts();
    const token = getCookie("token");
    this.setState({ isAuthorized: !token ? false : true, posts });
    if (token) {
      const { username = "" } = jsonwebtoken.decode(token) || {};
      this.setState({ username });
    }
  }
  render() {
    console.log(this.state);
    return (
      <>
        <header className="homeHeader">
          <div className="homeHeader">
            <span className="homeHeaderElement">Diary</span>
            {this.state.isAuthorized ? (
              <Link
                to={`/profile/${this.state.username}`}
                className="homeHeaderProfileWrapper"
              >
                <img className="profileButtonImg" src={profileButtonImg}></img>
                <span className="homeHeaderElement">Profile</span>
              </Link>
            ) : (
              <div
                className="homeHeaderElement"
                onClick={() => {
                  this.setState({ isOpenRequireLogInModal: true });
                }}
              >
                Log in
              </div>
            )}
          </div>
        </header>
        <section id="HomePage">
          <div className="postsWrapper">
            {this.state.posts.map((post, id) => {
              return (
                <div key={id} className="post">
                  <h2 className="postTitle">{post.title}</h2>
                  <p>{post.text}</p>
                  <img className="postImage" src={post.image_uri}></img>
                  <Link
                    to={`/profile/${post.author.username}`}
                    className="postAuthor"
                  >
                    {post.author.username}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="showMoreButtonWrapper">
            <button
              className="showMoreButton"
              onClick={() => {
                this.state.isAuthorized
                  ? this.setState({ limit: this.state.limit + 6 })
                  : this.setState({ isOpenRequireLogInModal: true });
              }}
            >
              Show More
            </button>
          </div>
          {this.state.isOpenRequireLogInModal && (
            <ModalWindowLogIn
              closeLogInModal={this.closeLogInModal}
              history={this.props.history}
            />
          )}
        </section>
      </>
    );
  }
}
