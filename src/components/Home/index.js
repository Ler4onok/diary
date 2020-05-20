import React from "react";
import { getPosts } from "../../api";
import "./index.css";
import profileButtonImg from "../../assets/profileImg.png";
import { Link } from "react-router-dom";

export class Home extends React.Component {
  state = {
    posts: [],
  };
  async componentDidMount() {
    const posts = await getPosts();
    this.setState({ posts });
  }
  render() {
    return (
      <>
        <header className="homeHeader">
          <div className="homeHeader">
            <span className="homeHeaderElement">Diary</span>
            <Link to="/profile" className="homeHeaderProfileWrapper">
              <img className="profileButtonImg" src={profileButtonImg}></img>
              <span className="homeHeaderElement">Profile</span>
            </Link>
          </div>
        </header>
        <div id="HomePage">
          <div className="postsWrapper">
            {this.state.posts.map((post, index) => {
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
            <button className="showMoreButton">Show More</button>
          </div>
        </div>
      </>
    );
  }
}
