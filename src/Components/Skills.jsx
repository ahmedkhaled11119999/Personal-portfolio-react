import React from "react";
import ProgressTile from "./ProgressTile";

class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        "UI/UX Design",
        "Website Design",
        "Mobile Design",
        "Responsive Design",
      ],
      technologies: [
        { name: "HTML", progress: "75%" },
        { name: "CSS", progress: "85%" },
        { name: "JavaScript", progress: "100%" },
        { name: "React.js", progress: "95%" },
        { name: "Bootstrap", progress: "95%" },
        { name: "Python", progress: "50%" },
        { name: "Django", progress: "55%" },
        { name: "PostgreSQL", progress: "65%" },
      ],
    };
  }

  render() {
    return (
      <div className="container-fluid bg-secondary">
        <h1 className="display-3 text-center p-5">Skills</h1>
        <p className="h4 fw-light text-center p-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic deserunt
          vel repellendus exercitationem cupiditate sunt dolorem vero, illo
          totam obcaecati voluptas doloribus provident! Consequuntur nostrum
          laborum voluptates praesentium ad sunt aut unde veritatis at, quae
          earum quasi, temporibus cupiditate ab.
        </p>
        <div className="row">
          <div className="col-md-6 py-5">
            <p className="h1 text-center">My Focus</p>
            <hr className="m-5" />
            {this.state.skills.map((skill) => (
              <p className="h2 text-center p-3" key={skill}>
                {skill}
              </p>
            ))}
          </div>
          <div className="col-md-6 p-5">
            {this.state.technologies.map((tech) => (
              <ProgressTile
                name={tech.name}
                key={tech.name}
                style={{ width: tech.progress }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
