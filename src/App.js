import React, { useState } from "react"
import { Button, FormControl, InputLabel,Input } from '@material-ui/core';
import Todo from "./Todo";

function App() {

  const [todos,setTodos] = useState(["Take Dogs ","Pat Them","Give Them Food"])
 const [input,setInput] = useState("");


 const addTodo = (event) =>
 {
     setTodos([...todos,input])
    event.preventDefault();
    setInput("")
    
 }

  return (
    <div className="app">
      <h1>Chestno.2 Says Hi!! To Everyone</h1>
      <form>
      <FormControl>
        <InputLabel>Add TodoItems</InputLabel>
        <Input value={input} onChange ={event => setInput(event.target.value) }  />
      </FormControl>
      
      <Button disabled = {!input} onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>

        </form>
      {/* <button type="submit" onClick={addTodo} >Add Todo</button> */}
      <ul>
        {todos.map(todo =>(
         <Todo text= {todo}  />
        ))}
       <li></li>
       
      </ul>
    </div>
  );
}

export default App;
