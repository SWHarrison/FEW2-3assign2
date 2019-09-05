import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';
import InvList from './InvList'
import CategoriesList from './CategoriesList'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      currentCategory: []
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
            console.log(categories)
            let newCat = this.state.currentCategory
            if(cat == "All"){
              if(newCat.includes("All")){
                newCat = []
              } else {
                newCat = categories.slice(0)
              }
            } else if(this.state.currentCategory.includes(cat) == false){
              newCat.push(cat)
            } else {
              newCat.splice(newCat.indexOf(cat),1)
              if(newCat.includes("All")){
                newCat.splice(newCat.indexOf("All"),1)
              }
            }
            console.log(newCat)
            this.setState({ currentCategory : newCat})
          }}
        />

        <InvList inventory = {inventory.filter(item =>
          //this.state.currentCategory.length == 0 ||
          this.state.currentCategory.includes(item.category))} />

      </div>
    );
  }
}

export default App;
