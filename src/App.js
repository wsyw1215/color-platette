import React, { Component } from 'react';
import './App.css';
import seedColors from './seedColors'
import Routes from './Routes'

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {
      palettes: savedPalettes || seedColors
    }
  }

  savePalette = (palette) => {
    this.setState(st => {
      return {
        palettes: [...st.palettes, palette]
      }
    }, this.syncLocalStorage);
  }

  deletePalette = (paletteId) => {
    this.setState({ palettes: this.state.palettes.filter(p => p.id !== paletteId) }, this.syncLocalStorage);
  }

  importPalette = (palettes) => {
    this.setState(st => {
      return {
        palettes: palettes
      }
    }, this.syncLocalStorage);
  }
  syncLocalStorage() {
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  }
  render() {
    return (
      <div className="App">
        <Routes palettes={this.state.palettes} newPalette={this.savePalette} deletePalette={this.deletePalette} importPalette={this.importPalette} />
      </div>
    );
  }
}

export default App;
