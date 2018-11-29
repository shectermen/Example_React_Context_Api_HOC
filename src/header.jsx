import React, { Component } from "react";
import { withAppContext } from "./withAppContext";
class Header extends Component {
  render() {
    console.log(this);
    return (
      <div className="headerComponent">
        <p>{this.props.context}</p>
      </div>
    );
  }
}
export default withAppContext(Header);
