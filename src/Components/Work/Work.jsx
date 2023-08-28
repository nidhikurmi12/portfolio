import React from "react";
import "./Work.css";
import facebook from "../../Images/facebook (1).png";
import amazon from "../../Images/smile1.png";
import fiverr from "../../Images/fiverr.png";
import upwork from "../../Images/smiley.png";
import shopify from "../../Images/shopify.jpg";
import { useContext } from "react";
import { themeContex } from "../../Contex";
import { motion } from "framer-motion";

const Work = () => {
  const theme = useContext(themeContex);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="work">
        <div className="awsome">
          <span style={{ color: darkMode ? "white" : "" }}>
          Expertise in all these 
          </span>
          <span style={{ color: "#7d25df" }}>Technologies</span>
          <span>
          HTML,CSS, JAVASCRIPT REACT FOR -FRONTEND 
            <br />
            NODE.JS , EXPRESS, MONGODB FOR-<br/>
            BACKEND
            <br />
          </span>
          {/* <button className="button s-button">Hire Me</button> */}
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        <div className="w-right">
          <motion.div
            className="w-mainCircle"
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
          >
            <div className="w-secCircle">
              <img src={upwork} alt="upwork" />
            </div>
            <div className="w-secCircle">
              <img src={shopify} alt="shopify" />
            </div>
            <div className="w-secCircle">
              <img src={amazon} alt="amazon" />
            </div>
            <div className="w-secCircle">
              <img src={fiverr} alt="fiverr" />
            </div>
            <div className="w-secCircle">
              <img src={facebook} alt="facebook" />
            </div>
          </motion.div>
          <div className="w-backCirle blueCircle"></div>
          <div className="w-backCirle yellowCircle"></div>
        </div>
      </div>
    </>
  );
};

export default Work;
