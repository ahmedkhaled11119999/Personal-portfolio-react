import React from "react";
class ProgressTile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <label htmlFor="pg-bar" className="h4">
          {this.props.name}
        </label>
        <div className="progress my-2" id="pg-bar">
          <div
            className="progress-bar bg-dark"
            role="progressbar"
            style={this.props.style}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </>
    );
  }
}

export default ProgressTile;
