import React from "react";
import { getPosts } from "../../api";
import "./index.css";
import profileButtonImg from "../../assets/profileImg.png";
import { Link } from "react-router-dom";
import { getCookie } from "../../helpers/cookies";
import { ModalWindowLogIn } from "../ModalWindowLogIn";
import jsonwebtoken from "jsonwebtoken";
import { ReactComponent as ShowMore } from "../../assets/plus.svg";
import { PlusIcon, CommentIcon, LeafIcon } from "./styled";

export class Home extends React.Component {
  state = {
    posts: [],
    isAuthorized: false,
    limit: 8,
    isOpenRequireLogInModal: false,
    username: "",
  };

  closeLogInModal = () => {
    this.setState({ isOpenRequireLogInModal: false });
  };

  async componentDidMount() {
    const localPosts = JSON.parse(localStorage.getItem("posts"));
    const token = getCookie("token");

    if (token) {
      const { username = "" } = jsonwebtoken.decode(token) || {};
      this.setState({ username, isAuthorized: !token ? false : true });
    }

    if (!localPosts || localPosts.length === 0) {
      const posts = await getPosts();
      localStorage.setItem("posts", JSON.stringify(posts));
      this.setState({ posts });
    } else {
      this.setState({ posts: localPosts });
    }
  }

  render() {
    return (
      <>
        <section className="homeHeaderWrapper">
          <header className="homeHeader">
            <div className="homeHeader">
              <a className="homeHeaderElement">ABOUT</a>
              {this.state.isAuthorized ? (
                <Link
                  to={`/profile/${this.state.username}`}
                  className="homeHeaderProfileWrapper"
                >
                  <span className="homeHeaderElement">GO TO PROFILE</span>
                </Link>
              ) : (
                <button
                  className="homeHeaderElementLogin"
                  onClick={() => {
                    this.setState({ isOpenRequireLogInModal: true });
                  }}
                >
                  LOG IN
                </button>
              )}
            </div>
          </header>
          <div className="homePageImageWrapper">
            <div className="homePageImageTextWrapper">
              <p className="homePageImageTitle">D I A R Y</p>
              <p className="homePageImageText">share your thoughts</p>
            </div>
          </div>
          <div id="HomePage">
            <div className="postsWrapper">
              {this.state.posts.slice(0, this.state.limit).map((post, id) => {
                return (
                  <div key={id} className="post">
                    <h2 className="postTitle">{post.title}</h2>
                    <p>{post.text}</p>
                    <div className="postInfo">
                      <div className="postAuthorInfo">
                        <img
                          className="postImage"
                          src="https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?ixlib=rb-1.2.1&w=1000&q=80"
                        ></img>
                        <Link
                          to={`/profile/${post.author.username}`}
                          className="postAuthor"
                        >
                          {post.author.username}
                        </Link>
                      </div>
                      <div className="postStatsInfo">
                        <CommentIcon className="postStatsInfoComment" />
                        <LeafIcon onClick={()=>{
                          
                        }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="showMoreButtonWrapper">
              <PlusIcon
                onClick={() => {
                  this.state.isAuthorized
                    ? this.setState({ limit: this.state.limit + 6 })
                    : this.setState({ isOpenRequireLogInModal: true });
                }}
              />
            </div>
            {this.state.isOpenRequireLogInModal && (
              <ModalWindowLogIn
                closeLogInModal={this.closeLogInModal}
                history={this.props.history}
              />
            )}
          </div>
        </section>
      </>
    );
  }
}
