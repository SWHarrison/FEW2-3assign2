import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';
import InvList from './InvList'
import CategoriesList from './CategoriesList'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      currentCategory: 'All'
    }
  }

  render() {
    const { currentCategory } = this.state

    console.log('rendering app '+currentCategory)
    return (
      <div className="App">
        <h1>Show products here</h1>
        <CategoriesList
          selected = {currentCategory}
          categoriesList = {categories}
          setCategory={(cat) => {
            this.setState({ currentCategory: cat })
          }}
        />

        <InvList inventory = {inventory.filter(item => this.state.currentCategory == "All" || item.category == this.state.currentCategory)} />

      </div>
    );
  }
}

export default App;
