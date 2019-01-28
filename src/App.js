import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Membre from "./components/Membre";
import Button from "./components/Button";


const famille = {
  membre1: {
    nom: "Antho",
    age: 27
  },
  membre2: {
    nom: "Fakher",
    age: 24
  },
  membre3: {
    nom: "houda",
    age: 48
  },
  membre4: {
    nom: "nour",
    age: 30
  }
};
class App extends Component {
  handleClick = num => {
    const famille = { ... this.state.famille }
    famille.membre1.age += num
    this.setState({ famille })
    console.log(famille.membre1.age)
  }

  handleChange = event => {
    const famille = { ... this.state.famille }
    const nom = event.target.value
    this.setState({ famille })
    famille.membre1.nom = nom
  }
  state = { famille };
  render() {
    const { famille } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1> {this.props.titre}</h1>
          <input type='text' value={famille.membre1.nom} onChange={this.handleChange} />
          <Membre age={famille.membre1.age} nom={famille.membre1.nom} />
          <Membre age={famille.membre2.age} nom={famille.membre2.nom} />
          <Membre age={famille.membre3.age} nom={famille.membre3.nom} />
          <Membre age={famille.membre4.age} nom={famille.membre4.nom} />
          <Button vieillir={() => this.handleClick(2)} />
        </header>
      </div>
    );
  }
}

export default App;
