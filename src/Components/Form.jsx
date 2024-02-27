import React, { useState } from 'react'

function List({onAddItem}) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();
        if(!description) return;
        const itemList = {description , quantity , packed:false , id:Date.now()}
        console.log(itemList);
        onAddItem(itemList)
        setDescription('');
        setQuantity(1);
    }

    return (
        <form className='add-form'>
            <h3>What do you need for your trip?</h3>
            <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input type='text' placeholder='Item....' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <button  onClick={handleSubmit}>Add</button>
        </form>
    )
}

export default List