import React, { Component } from "react";
import logo from "./logo.svg";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Välkommen till Villes och Johannas bröllop!
          </h1>
        </header>
        <p className="App-intro">
          {this.props.guests.map(guest => (
            <div>
              <h2>{guest.name}</h2>
              <h2>{guest.songs}</h2>
            </div>
          ))}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  guests: state.guests
});

export default connect(mapStateToProps)(App);
