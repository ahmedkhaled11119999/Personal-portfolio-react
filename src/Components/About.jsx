import React from "react";
import Button from "./Button";

class About extends React.Component {
  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <h1 className="display-3 m-4 text-center">About Me</h1>
          </div>
          <div className="col-md-8">
            <div className="d-flex flex-column align-items-start m-4">
              <p className="h5 fw-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                perspiciatis mollitia repudiandae voluptatibus, repellendus
                quaerat possimus culpa expedita ea molestiae, numquam soluta
                praesentium, deserunt aperiam vero distinctio quam? Repellat,
                reprehenderit? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Deserunt dignissimos voluptates nobis
                doloribus officia corrupti quasi, ipsam nam, rem assumenda sed
                animi impedit sunt quod et cumque quo fugiat. Debitis!
              </p>
              <Button
                button={{ btnName: "Download Resume", section: 1 }}
                styles={{ margin: "2rem 0" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
