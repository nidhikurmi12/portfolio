import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import profilepic1 from '../../Images/profilepic1.jpg';
import profilepic2 from '../../Images/profilepic2.jpg';
import profilepic3 from '../../Images/profilepic3.jpg';
import profilepic4 from '../../Images/profilepic4.jpg';
import profilepic5 from '../../Images/profilepic5.jpg';

const Testimonial = () => {
  const clients = [
    {
      id: 1,
      img: profilepic1,
      Review:
        'Frontend Developer with High level of Experience in web designing and Development , producing the Quality work',
    },
    {
      id: 2,
      img: profilepic2,
      Review:
        'Frontend Developer with High level of Experience in web designing and Development , producing the Quality work',
    },
    {
      id: 3,
      img: profilepic3,
      Review:
        'Frontend Developer with High level of Experience in web designing and Development , producing the Quality work',
    },
    {
      id: 4,
      img: profilepic4,
      Review:
        'Frontend Developer with High level of Experience in web designing and Development , producing the Quality work',
    },
    {
      id: 5,
      img: profilepic5,
      Review:
        'Frontend Developer with High level of Experience in web designing and Development , producing the Quality work',
    },
  ];

  return (
    <>
      <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
          <span>Client Always Get </span>
          <span style={{color:'#7d25df'}}> Exceptional work </span>
          <span> From me</span>
          <div
            className="blur t-blur1"
            style={{ background: 'var(--purple)' }}
          ></div>
          <div
            className="blur t-blur2"
            style={{ background: 'skyblue' }}
          ></div>
        </div>

        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="swiper"
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="testomonial">
                <img src={client.img} alt="" />
                <span>{client.Review}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
