import React from 'react'

function CategoriesList(props) {
  const categories = props.categoriesList;
  categories.push("All")
  const listItems = categories.map((category) =>
    <li>{category}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

export default CategoriesList
