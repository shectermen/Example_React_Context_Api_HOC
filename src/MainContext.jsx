import React from "react";
import AppProvider from "./appProvider.jsx";

export class MainContext extends React.Component {
  render() {
    return (
      <AppProvider zones={this.props.zones}>{this.props.children}</AppProvider>
    );
  }
}

export default MainContext;
