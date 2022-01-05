import React from "react";

class Button extends React.Component {
  constructor(props) {
    console.log(props);
    super();
  }

  setBtnColor() {
    let classes = "btn btn-lg btn-outline-";
    if (this.props.button.section === 0) classes += "light";
    else if (this.props.button.section === 1) classes += "dark";
    return classes;
  }

  render() {
    return (
      <button className={this.setBtnColor()} style={this.props.styles}>
        {this.props.button.btnName}
      </button>
    );
  }
}

export default Button;
