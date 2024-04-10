import logo from './logo.svg';
import './App.css';
import Todoinput from './components/Todoinput';
import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [listTodo, setlistTodo] = useState([]);
  let addList = (inputtext) => {
    if(inputtext  !== '')
      setlistTodo([...listTodo, inputtext]);
  }

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setlistTodo([...newListTodo]);
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <Todoinput addList={addList} />
        <h1 className='app-heading'>TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            < TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
