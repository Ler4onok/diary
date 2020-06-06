import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { getUserData } from "../../api";
import { getCookie } from "../../helpers/cookies";
import moment from "moment";
import addProfileImg from "../../assets/addProfileImg.png";

export class Profile extends React.Component {
  state = {
    data: {
      posts: [],
      profile: {
        username: "",
        bio: "",
        profileImage: null,
      },
    },
  };

  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    try {
      const token = getCookie("token");
      const username = this.props.match.params.username;
      const data = await getUserData(token, username);
      this.setState({ data });
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
        data: {
          ...this.state.data,
          profile: { ...this.state.profile, profileImage: event.target.result },
        },
      });
    };
  };
  render() {
    console.log(this.state.data);
    return (
      <>
        <div className="profilePage">
          <div className="profileHeader">
            <Link to="/" className="profileHomeButton">
              Home
            </Link>
            <Link to="/settings">Go to settings </Link>
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
                  htmlFor="profileUpload"
                  className="profileImg"
                  style={
                    this.state.data.profile.profileImage == null
                      ? { content: `url(${addProfileImg})` }
                      : {
                          content: `url(${this.state.data.profile.profileImage})`,
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
                  {this.state.data.profile.username}
                </div>
                <div className="profileUserBio">Say no to good manners</div>
              </div>
              <div className="profilePosts">
                {this.state.data.posts.map((post) => {
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
                          <div className="userPostSettings">...</div>
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
