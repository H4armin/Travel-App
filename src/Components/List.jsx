import React from 'react';

const intialItems = [
  { id: 1, descripitn: "Passports", quantity: 2, packed: false },
  { id: 2, descripitn: "Socks", quantity: 12, packed: false },
  { id: 3, descripitn: "Charger", quantity: 1, packed: true }
]

function List({items , onDeleteItem , onToggleItem}) {
  return (
    <div className='list'>
      <ul> 
        {items.map((item) => (
          <Item item={item} key={item} onDeleteItem = {onDeleteItem} onToggleItem = {onToggleItem}/>
        ))}
      </ul>
    </div>
  )
}
function Item({ item , onDeleteItem , onToggleItem}) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={()=>onToggleItem(item.id)}/>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={()=>onDeleteItem(item.id)}>x</button>
    </li>
  )
}

export default List