import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { getUserData, deletePost } from "../../api";
import { getCookie } from "../../helpers/cookies";
import moment from "moment";
import addProfileImg from "../../assets/addProfileImg.png";
import { ReactComponent as DeletePost } from "../../assets/deletePost.svg";

export class Profile extends React.Component {
  state = {
    posts: [],
    profile: {
      username: "",
      bio: "",
      profileImage: null,
    },
  };

  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    try {
      const token = getCookie("token");
      const username = this.props.match.params.username;
      const { posts, profile } = await getUserData(token, username);
      this.setState({ posts, profile });
    } catch (error) {
      console.log({ error });
    }
  };

  changeProfileImg = (event) => {
    const files = event.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (event) => {
      this.setState({
        ...this.state,
        profile: { ...this.state.profile, profileImage: event.target.result },
      });
    };
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div className="profilePage">
          <div className="profileHeader">
            <Link to="/" className="profileHomeButton">
              Home
            </Link>
            {/* <Link to="/settings">Go to settings </Link> */}
            <Link to="/add-post" className="profileAddPostButton">
              <div className="addPostButon">
                <button className="icon-btn add-btn">
                  <div className="add-icon"></div>
                  <div className="btn-txt">Add post</div>
                </button>
              </div>
            </Link>
          </div>
          <div className="profileFeedWrapper">
            <section className="profileFeed">
              <div className="profileInfo">
                <label
                  title="upload new image"
                  htmlFor="profileUpload"
                  className="profileImg"
                  style={
                    this.state.profile.profileImage == null
                      ? { content: `url(${addProfileImg})` }
                      : {
                          content: `url(${this.state.profile.profileImage})`,
                        }
                  }
                >
                  Upload
                </label>
                <input
                  id="profileUpload"
                  type="file"
                  onChange={(event) => {
                    this.changeProfileImg(event);
                  }}
                />
                <div className="profileUserName">
                  {this.state.profile.username}
                </div>
                <div className="profileUserBio">Say no to good manners</div>
              </div>
              <div className="profilePosts">
                {this.state.posts.map((post) => {
                  console.log(post);
                  return (
                    <div className="userPost">
                      <div className="userPostTitle">{post.title}</div>
                      <div className="userPostText">{post.text}</div>
                      <div className="userPostBottomWrapper">
                        <div className="userPostLikes">Likes</div>
                        <div className="userPostBottomSection">
                          <div className="userPostCreatedAt">
                            {moment(post.created_at).startOf("day").fromNow()}
                          </div>
                          <div className="userPostSettings">
                            <DeletePost
                              onClick={() => {
                                const token = getCookie("token");
                                deletePost(token, post.id);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}
