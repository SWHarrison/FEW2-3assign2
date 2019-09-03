import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';
//import InvItem from './InvItem'
import CategoriesList from './CategoriesList'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Show products here</h1>

        <ul>
          <CategoriesList categoriesList = {categories} />
        </ul>

        <ul>
          {/* Products listed here */}
        </ul>

      </div>
    );
  }
}

export default App;
