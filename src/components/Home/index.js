import React from "react";
import { getPosts } from "../../api";
import "./index.css";

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
      <div>
        <header className='homeHeader'>
          <ul className='homeHeader'>
            <li className='homeHeaderElement'>Home</li>
            <li className='homeHeaderElement'>Profile</li>
          </ul>
        </header>
        <div className="postsWrapper">
          {this.state.posts.map((post, index) => {
            return (
              <div key={index} className="post">
                <h2 className='postTitle'>{post.title}</h2>
                <p>{post.text}</p>
                <div className='postAuthor'>{post.author}</div>
              </div>
            );
          })}
        </div>
        <div className='showMoreButtonWrapper'>
        <button className='showMoreButton'>Show More</button>
        </div>
      </div>
    );
  }
}
