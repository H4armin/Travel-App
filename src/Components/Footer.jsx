import React from 'react'

function Footer({items}) {
  if(!items.length)
    return(
      <footer className='stats'>
        <em>Start To Adding Items In Your List.</em> 
      </footer>
    )

  const numItems = items.length;
  const numPakcedItems = items.filter((item)=>item.packed).length;
  const perNumItems = Math.round((numPakcedItems/numItems) * 100);
  return (
    <footer className='stats'>
      {
        perNumItems === 100 ? 'You Got Everythng! Ready To Go.': `You Have ${numItems} Items In Your List , And You Already Packed ${numPakcedItems} (${perNumItems}%)`
      }
    </footer>
  )
}

export default Footer