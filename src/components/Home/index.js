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
        <div className="postsWrapper">
          {this.state.posts.map((post) => {
            return (
              <div className="post">
                <h2>{post.title}</h2>
                <p>{post.text}</p>
                <div>{post.author}</div>
              </div>
            );
          })}
        </div>
				<button>Show More</button>
      </div>
    );
  }
}
