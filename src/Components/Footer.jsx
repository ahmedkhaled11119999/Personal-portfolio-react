import React from "react";
import Button from "./Button";
import {
  FaPhoneAlt,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitter,
  FaMailBulk,
} from "react-icons/fa";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container-fluid bg-dark">
          <div className="row">
            <div className="col-lg-4 text-white mt-5">
              <div className="d-flex flex-column align-items-center">
                <h3 className="display-6 px-5">GET IN TOUCH</h3>
                <div className="d-flex justify-content-center align-items-center">
                  <FaMailBulk />
                  <span className="h6 p-3">ahmedkhaled1111999@gmail.com</span>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  <FaPhoneAlt />
                  <p className="h6 p-3">+20 111 5448 989</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <Button
                button={{ btnName: "Contact Me", section: 0 }}
                styles={{ display: "block", margin: "0px auto" }}
              />
            </div>
            <div className="col-lg-4 mt-5 text-center">
              <div
                className="icons-container"
                style={{ fontSize: "50px", color: "white" }}
              >
                <FaLinkedin />
                <FaFacebookSquare />
                <FaTwitter />
              </div>
              <p className="text-white">
                Copyrights &copy; All rights reserved 2022.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
