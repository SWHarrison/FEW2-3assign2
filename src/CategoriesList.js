import React from 'react'
import {countCategory} from './map-filter-reduce'
import inventory from './inventory'
import './CategoriesList.css'

function CategoriesList(props) {
  const categories = props.categoriesList;
  const listItems = categories.map((category) => {

    console.log(category + " equals " + props.selected + ": " + (category == props.selected))
    let num;
    if(category != 'All'){
      num = countCategory(inventory, category)
    } else {
      num = inventory.length;
    }
    return (
      <div
        className={category == props.selected ? 'selected' : ''}
        onClick={() => {
        props.setCategory(category)
      }}>
        <div>{category}</div>
        <div>{num}</div>
      </div>
    )
  });
  return (
    <div className="CategoriesList">
    {listItems}
    </div>
  );
}

export default CategoriesList
