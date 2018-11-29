import React, { Component } from "react";
import ReactDOM from "react-dom";
import MainContext from "./MainContext";
import Header from "./header.jsx";
class App extends Component {
  render() {
    return (
      <MainContext zones="TestProviderData">
        <Header />
      </MainContext>
    );
  }
}
export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
