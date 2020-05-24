import React from "react";
import { getPosts } from "../../api";
import "./index.css";
import profileButtonImg from "../../assets/profileImg.png";
import { Link } from "react-router-dom";
import { getCookie } from "../../helpers/cookies";
import { ModalWindowLogIn } from "../ModalWindowLogIn";

export class Home extends React.Component {
  state = {
    posts: [],
    isAuthorized: false,
    limit: 3,
    isOpenRequireLogInModal: false,
  };

  componentWillMount() {
    const token = getCookie("token");
    this.setState({ isAuthorized: !token ? false : true });
  }

  closeLogInModal = () => {
    this.setState({ isOpenRequireLogInModal: false });
  };

  async componentDidMount() {
    const posts = await getPosts();
    this.setState({ posts });
  }
  render() {
    console.log(this.state.isOpenRequireLogInModal);
    return (
      <>
        <header className="homeHeader">
          <div className="homeHeader">
            <span className="homeHeaderElement">Diary</span>
            {this.state.isAuthorized ? (
              <Link to="/profile" className="homeHeaderProfileWrapper">
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
        <div id="HomePage">
          <div className="postsWrapper">
            {this.state.posts.slice(0, this.state.limit).map((post, index) => {
              return (
                <div key={index} className="post">
                  <h2 className="postTitle">{post.title}</h2>
                  <p>{post.text}</p>
                  <img className="postImage" src={post.imgSrc}></img>
                  <div className="postAuthor">{post.author}</div>
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
            <ModalWindowLogIn closeLogInModal={this.closeLogInModal} />
          )}
        </div>
      </>
    );
  }
}
