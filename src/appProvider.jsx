import React, { Component } from "react";
import { AppContext } from "./context.jsx";
// Create a new context for the app

// Creates a provider Component
class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  componentDidMount() {
    const { zones } = this.props;
    this.setState({
      value: zones
    });
  }

  render() {
    return (
      <AppContext.Provider value={this.state.value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
export default AppProvider;
