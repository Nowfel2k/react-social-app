import React from "react";
import "../Styles/Profile.css";
import PostMaker from "./Child Components/PostMaker";
import Posts from "./Child Components/Posts";
import { photos } from "../Helpers/photos";
import { friends } from "../Helpers/friends";
import AltProfileTop from "./Child Components/AltProfileTop";
import Header from "./Header";
import { Link } from "react-router-dom";

function AltProfile() {
  return (
    <div className="profile">
      <Header />
      <AltProfileTop />
      <div className="profile__body">
        <div className="profile__left">
          <div className="profile__intro">
            <h5>Intro</h5>
          </div>

          <div className="profile__photos">
            <h5>Photos</h5>
            <div className="profile__photosContainer">
              {photos.map((photo) => (
                <Link to="/gallery">
                  <div className="profile__photo">
                    <img src={photo} alt="fbphotos" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="profile__friends">
            <h5>Friends</h5>
            <div className="profile__friendsContainer">
              {friends.map((friend) => (
                <div className="profile__friend">
                  <img src={friend.src} alt="friendphotos" />
                  <p>{friend.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="profile__right">
          <PostMaker profile />
          <Posts profile />
        </div>
      </div>
    </div>
  );
}

export default Profile;
import React from "react";
import "../Styles/Profile.css";
import PostMaker from "./Child Components/PostMaker";
import Posts from "./Child Components/Posts";
import { photos } from "../Helpers/photos";
import { friends } from "../Helpers/friends";
import ProfileTop from "./Child Components/ProfileTop";
import Header from "./Header";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="profile">
      <Header />
      <ProfileTop />
      <div className="profile__body">
        <div className="profile__left">
          <div className="profile__intro">
            <h5>Intro</h5>
          </div>

          <div className="profile__photos">
            <h5>Photos</h5>
            <div className="profile__photosContainer">
              {photos.map((photo) => (
                <Link to="/gallery">
                  <div className="profile__photo">
                    <img src={photo} alt="fbphotos" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="profile__friends">
            <h5>Friends</h5>
            <div className="profile__friendsContainer">
              {friends.map((friend) => (
                <div className="profile__friend">
                  <img src={friend.src} alt="friendphotos" />
                  <p>{friend.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="profile__right">
          <PostMaker profile />
          <Posts profile />
        </div>
      </div>
    </div>
  );
}

export default AltProfile;
