import React from "react";
import "./Footer.css";
import Waveimg from "../../Images/footer.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Youtube from "@iconscout/react-unicons/icons/uil-youtube";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src={Waveimg} alt="" />
        <div className="f-content">
          <span>nidhikurmi11@gmail.com</span>
          <div className="f-icons">
            <a href="https://www.instagram.com/nickkurmi/">
              {" "}
              <Insta color="white" size="3rem" />
            </a>
            <a href="https://www.youtube.com/channel/UCSbtta2Nyelp22ztJ1iFgYg">
              <Youtube color="white" size="3rem" />
            </a>
            <a href="https://github.com/Nidhi-877">
              <Github color="white" size="3rem" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
