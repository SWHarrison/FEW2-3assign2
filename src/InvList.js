import React from 'react'

function InvList(props) {
  const inventory = props.inventory;
  console.log(inventory)
  const listItems = inventory.map(({name, price, description}) => {

    return (
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    )
  });
  return (
    <div className = "grid">{listItems}</div>
  );
}

export default InvList
