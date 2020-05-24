import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export class Profile extends React.Component {
  render() {
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
            <div className="profileFeed">
              <div className="profileInfo">
                <img className="profileImg" />
                <div className="profileUserName">Lora</div>
                <div className="profileUserBio">Say no to good manners</div>
              </div>
              <div className="profilePosts">
                Satellite data gathered between 2017 and 2019, combined with
                on-the-ground measurements over two summers in Antarctica,
                allowed scientists to map the microscopic algae as they bloomed
                across the snow of the Antarctic Peninsula. Warming temperatures
                could create more "habitable" environments for the algae, which
                need wet snow to grow in, researchers told CNN. Green snow alga
                is microscopic when measured individually, but when the
                organisms grow simultaneously, they turn the snow bright green,
                and can even be spotted from space, researchers said in a study
                published in the Nature Communications journal on
                Wednesday.Satellite data gathered between 2017 and 2019,
                combined with on-the-ground measurements over two summers in
                Antarctica, allowed scientists to map the microscopic algae as
                they bloomed across the snow of the Antarctic Peninsula. Warming
                temperatures could create more "habitable" environments for the
                algae, which need wet snow to grow in, researchers told CNN.
                Green snow alga is microscopic when measured individually, but
                when the organisms grow simultaneously, they turn the snow
                bright green, and can even be spotted from space, researchers
                said in a study published in the Nature Communications journal
                on Wednesday.Satellite data gathered between 2017 and 2019,
                combined with on-the-ground measurements over two summers in
                Antarctica, allowed scientists to map the microscopic algae as
                they bloomed across the snow of the Antarctic Peninsula. Warming
                temperatures could create more "habitable" environments for the
                algae, which need wet snow to grow in, researchers told CNN.
                Green snow alga is microscopic when measured individually, but
                when the organisms grow simultaneously, they turn the snow
                bright green, and can even be spotted from space, researchers
                said in a study published in the Nature Communications journal
                on Wednesday.Satellite data gathered between 2017 and 2019,
                combined with on-the-ground measurements over two summers in
                Antarctica, allowed scientists to map the microscopic algae as
                they bloomed across the snow of the Antarctic Peninsula. Warming
                temperatures could create more "habitable" environments for the
                algae, which need wet snow to grow in, researchers told CNN.
                Green snow alga is microscopic when measured individually, but
                when the organisms grow simultaneously, they turn the snow
                bright green, and can even be spotted from space, researchers
                said in a study published in the Nature Communications journal
                on Wednesday.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
