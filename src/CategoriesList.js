import React from 'react'
import {countCategory} from './map-filter-reduce'
import inventory from './inventory'
import './CategoriesList.css'

function CategoriesList(props) {
  const categories = props.categoriesList;
  categories.push("All")
  const listItems = categories.map((category) => {

    const num = countCategory(inventory,category)
    return (
      <div>
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
