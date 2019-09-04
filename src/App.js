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
    console.log('rendering app '+this.state.currentCategory)
    console.log(inventory.filter(item => this.state.currentCategory == "All" || item.category == this.state.currentCategory))
    return (
      <div className="App">
        <h1>Show products here</h1>
        <CategoriesList
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
