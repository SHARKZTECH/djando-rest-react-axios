import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import axios from "axios";  
import Header from './Header';
import Add from './Add';
import TodoList from "./TodoList";
import Update from "./Update";

function App() {
  const url="http://127.0.0.1:8000";
  const [todos,setTodos]=useState([]);
  const [inputText,setInputText]=useState("");

  const addTodoHandler=async (todo)=>{
    const request={
      completed:false,
      title:todo
    }
    const response = await axios.post(`${url}/task-create/`,request)
    setTodos([...todos,response.data])
    window.location="/";
  }
const updateTodoHandler=async (todo)=>{
  console.log(todo);
  const response=await axios.put(`${url}/task-update/${todo.id}/`,todo)
  setTodos(response.data)
  window.location="/";
}

  const removeTodoHadler=async (id)=>{
    await axios.delete(`${url}/task-delete/${id}/`);
    const newTodos=todos.filter((todo)=>{
      return todo.id !==id;
    });
    setTodos(newTodos)
    
  }

  //RETRIVE TODOS FROM API USING AXIOS 
const retriveTodos=async ()=>{
  const response=await axios.get(`${url}/task-list/`);
  return response.data;
}

useEffect(()=>{
const getAllTodos= async ()=>{
  const allTodos= await retriveTodos();
  setTodos(allTodos);
}
getAllTodos();
},[]);

  return (
    <div className="App">
         <div className="container mt-3">
           <Router>
        <Header/>
        <Routes>
          <Route path="/" exact element={<TodoList 
          removeTodoHadler={removeTodoHadler}
          todos={todos}/>}/>
          <Route path="/add" element={<Add 
          inputText={inputText}
          setInputText={setInputText} 
          addTodoHandler={addTodoHandler}
          />}/> 
          <Route 
          path="/:id"
          element={<Update updateTodoHandler={updateTodoHandler}/>}/>    
        
        </Routes>
        </Router>
      </div>
    
    </div>
  );
}

export default App;
