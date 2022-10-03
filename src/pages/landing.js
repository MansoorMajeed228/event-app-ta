import React from "react";
import landingImage from "../assets/LandingPageImage.svg";
import { Button } from "antd";
import "../styles/landing.css";
import { useNavigate } from "react-router-dom";
function Landing() {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <div className="container">
        <h1 className="header">
          Imagine if <div className="snapchat">SnapChat</div> had events.
        </h1>
        <h6 className="details">
          Easily host and share events with your friends across any social
          media.
        </h6>

        <img className="img" src={landingImage} alt="logo" />

        <Button
          className="create-event-btn"
          onClick={() => navigate("/create")}
          shape="round"
          // icon={<DownloadOutlined />}
        >
          Create my event
        </Button>
      </div>
    </div>
  );
}

export default Landing;
