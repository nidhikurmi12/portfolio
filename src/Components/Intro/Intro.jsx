import React from "react";
import "./Intro.css";
// import nidhi from "../../Images/nidhi.jpg";
import { themeContex } from "../../Contex";
import { useContext } from "react";
// import { Link } from "react-router-dom";
const Intro = () => {
  // const transition = {duration : 2, type: 'spring'}

  const theme = useContext(themeContex);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <section className="intro-wrapper intro">
        <div className="container-xxl i-left">
          <div className="row introwrap d-flex">
            <div className="col-6">
              <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
                <span>NIDHI KURMI</span>
                <span>
                Frontend Developer with High level of Experience in <br/>
                  web designing and Development , producting the 
                  <br /> Quality work 
                </span>
              </div>
              <button className=" i-button">
                <a href="https://www.linkedin.com/in/nidhi-kurmi-7917-nk/">Hire me</a>
              </button>
              <div className="i-icons ">
                <a href="https://www.instagram.com/nickkurmi/">
                  <i className="bx bxl-instagram iconfram"></i>
                </a>
                <a href="https://www.linkedin.com/in/nidhi-kurmi-7917-nk/">
                  <i class="bx bxl-linkedin-square iconfram"></i>
                </a>
                <a href="https://github.com/Nidhi-877">
                  <i className="bx bxl-github iconfram"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCSbtta2Nyelp22ztJ1iFgYg">
                  <i class="bx bxl-youtube iconfram"></i>
                </a>
              </div>
            </div>
            <div className="col-6 i-right ">
              {/* <img
                src={nidhi}
                alt="nidhi"
                className="i-img-fluid"             
              /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
