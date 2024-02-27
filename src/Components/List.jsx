import React, { useState } from 'react';

function List({ items, onDeleteItem, onToggleItem , deleteAllItems}) {
  const [sortBy, setSortBy] = useState('input');
  let sortedItem;

  if (sortBy === 'input') sortedItem = items;
  if (sortBy === 'description') sortedItem = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'packed') sortedItem = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <>
      <div className='list'>
        <ul>
          {sortedItem.map((item) => (
            <Item item={item} key={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
          ))}
        </ul>
      </div>
      <div className='actions' onChange={e=>setSortBy(e.target.value)}>
        <select value={sortBy}>
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed</option>
        </select>
        <button onClick={deleteAllItems}>Clear List</button>
      </div>
    </>

  )
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>x</button>
    </li>
  )
}

export default List