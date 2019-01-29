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
    nom: "silvain",
    age: 24
  },
  membre3: {
    nom: "joe",
    age: 48
  },
  membre4: {
    nom: "cat",
    age: 2
  }
};
class App extends Component {

  state = {
    famille,
    isShow: false
  };

  handleClick = num => {
    const famille = { ... this.state.famille }
    famille.membre1.age += num
    this.setState({ famille })
    console.log(famille.membre1.age)
  }

  handleChange = (event, membre) => {
    const famille = { ... this.state.famille }
    const nom = event.target.value
    this.setState({ famille })
    famille[membre].nom = nom
  }

  hideName = id => {
    const famille = { ... this.state.famille }
    famille[id].nom = 'X'
    this.setState({ famille })
  }

  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({ isShow })
  }

  render() {
    const { famille, isShow } = this.state;
    let description = null
    const list = Object.keys(famille)
      .map(membre => (
        <Membre
          key={membre}
          handleChange={event => this.handleChange(event, membre)}
          hideName={() => this.hideName(membre)}
          age={famille[membre].age}
          nom={famille[membre].nom} />
      ))

    if (isShow) { description = <strong> Je suis un chat</strong> }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> {this.props.titre}</h1>

          {list}
          {description}
          <button onClick={this.handleShowDescription}>{isShow ? 'cacher' : 'Montrer'}</button>
          <Button vieillir={() => this.handleClick(2)} />
        </header>
      </div >
    );
  }
}

export default App;
