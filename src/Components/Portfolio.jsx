import React from "react";
import PortfolioItem from "./PortfolioItem";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolios: [
        { name: "Web Design", style: { backgroundColor: "grey" } },
        { name: "Mobile Design", style: { backgroundColor: "black" } },
        { name: "Logo Design", style: { backgroundColor: "grey" } },
        {
          name: "Web Application Development",
          style: { backgroundColor: "black" },
        },
        {
          name: "Mobile Application Development",
          style: { backgroundColor: "grey" },
        },
        { name: "PWA Development", style: { backgroundColor: "black" } },
      ],
    };
  }
  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center display-3 p-5">Portfolio</h1>
        <div className="row">
          {this.state.portfolios.map((item) => (
            <PortfolioItem style={item.style} itemName={item.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
