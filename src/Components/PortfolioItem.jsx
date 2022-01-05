import React from "react";

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-md-4 col-sm-6 p-3">
        <div
          className="d-flex flex-cloumn align-items-center justify-content-center shadow-lg"
          style={{ ...this.props.style, height: "200px" }}
        >
          <p className="h3 text-white text-center">{this.props.itemName}</p>
        </div>
      </div>
    );
  }
}

export default PortfolioItem;
