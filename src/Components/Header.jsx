import React from "react";
import headerImage from "../header-photo1.jpg";
import "../css/header.css";
import Button from "./Button";

class Header extends React.Component {
  render() {
    return (
      <header>
        <img
          className="header-background img-fluid"
          src={headerImage}
          alt="header-image"
        />
        <div className="header-content">
          <h1 className="display-2">Katie Reed</h1>
          <h3>Web developer and Designer</h3>
        </div>
        <Button
          button={{ btnName: "Contact Me", section: 0 }}
          styles={{
            position: "absolute",
            left: "25%",
            top: "70%",
          }}
        />
      </header>
    );
  }
}

export default Header;
