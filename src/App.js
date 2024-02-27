import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer.jsx';
import List from './Components/List.jsx';
import Form from './Components/Form.jsx';
import Header from './Components/header.jsx';

function App() {

  const [items , setItems] = useState([]);

  function handleAddItem(item){
    setItems((items) => [...items , item])
  } 

  function handleDeleteItem(id){
    setItems((items) => items.filter((item)=>item.id !== id))
  } 

  function handleToggleItem(id){
    setItems((items) => items.map((item)=>item.id === id ? {...item , packed: !item.packe} : item))
  } 

  return (
    <>
      <Header/>
      <Form onAddItem = {handleAddItem}/>
      <List items = {items} onDeleteItem = {handleDeleteItem} onToggleItem = {handleToggleItem}/>
      <Footer/>
    </>
  );
}

export default App;
