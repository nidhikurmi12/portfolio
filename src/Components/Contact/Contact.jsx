import "./Contact.css";
import React from "react";
import emailjs from "@emailjs/browser";
import { themeContex } from "../../Contex";
import { useContext } from "react";
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kigizjg",
        "template_cuvztaa",
        e.target,
        "nVrcRK7-1P_8rlPHz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const theme = useContext(themeContex);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className="contact-form" id="Contact">
        <div className="w-left">
          <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
            <br />
            <span style={{ color: "#7d25df", fontWeight: "bolder" }}>
              Contact Me
            </span>
            <div
              className="blur t-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        <div className="c-right">
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder="Name"
            />
            <input
              type="email"
              name="user_email"
              className="user"
              placeholder="Email"
            />
            <textarea name="message" className="user" placeholder="Message" />
            <div className="c-btn">
              <input type="submit" value="Send" className="button" />
            </div>

            <div
              className="blur t-blur1"
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
