import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  async getCandidates() {
    try {
      const response = await fetch("/candidates/");
      const candidates = await response.json();
      console.log("Received candidates:", candidates);
    } catch (e) {
      console.error("API request raised an error:", e);
    }
  }
  componentDidMount() {
    this.getCandidates();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
