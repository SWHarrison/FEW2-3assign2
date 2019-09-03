import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';
import InvList from './InvList'
import CategoriesList from './CategoriesList'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Show products here</h1>
        <CategoriesList categoriesList = {categories} />

        <InvList inventory = {inventory} />

      </div>
    );
  }
}

export default App;
