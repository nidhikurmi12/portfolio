import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import picture1 from "../../Images/project1.png";
import picture2 from "../../Images/project2.png";
import picture3 from "../../Images/project3.png";
import picture4 from "../../Images/project4.png";
import picture5 from "../../Images/project5.png";
import N1 from "../../Images/N-1.png";
import N2 from "../../Images/N-2.png";
import N3 from "../../Images/N-3.png";
import E1 from "../../Images/E-1.png"
import E2 from "../../Images/E-2.png"
import E3 from "../../Images/E-3.png"
import R1 from "../../Images/R-1.png"
import R2 from "../../Images/R-2.png"
import R3 from "../../Images/R-3.png"
import EN1 from "../../Images/EN-1.png"
import EN2 from "../../Images/EN-2.png"
import EN3 from "../../Images/EN-3.png"
import "swiper/css";
import { themeContex } from "../../Contex";
import { useContext } from "react";
const Portfolio = () => {
  const theme = useContext(themeContex);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="portfolio" id="Portfolio">
        <span>Recents projects</span>
        <span style={{ color: "#7d25df" }}>Portfolio</span>

        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider"
        >
          <SwiperSlide>
            <a href="https://www.lp.finance">
              <img src={picture1} alt="picture1" />
              <h3 style={{ color: "white" }}>LP FINANCE</h3>
              <h3 className="img-wrap">Click Me</h3>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <img className="n-img" src={picture2} alt="picture2" />
            <h3>NETFLIXCLONE</h3>
            <div className="img-side">
              <img src={N1} alt="N1" />
              <img src={N2} alt="N2" />
              <img src={N3} alt="N3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="n-img" src={picture3} alt="picture3" />
            <h3>ECOMMERCE APP</h3>
            <div className="img-side">
              <img src={E1} alt="E1" />
              <img src={E2} alt="E2" />
              <img src={E3} alt="E3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="n-img" src={picture4} alt="picture4" />
            <h3>RODZINATECHNOLOGY</h3>
            <div className="img-side">
              <img src={R1} alt="R1" />
              <img src={R2} alt="R2" />
              <img src={R3} alt="R3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="n-img" src={picture5} alt="picture5" />
            <h3>ENGLAMOROUS</h3>
            <div className="img-side last-slide">
              <img src={EN1} alt="EN1" />
              <img src={EN2} alt="EN2" />
              <img src={EN3} alt="EN3" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Portfolio;
