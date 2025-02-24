// Imports:
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { useState } from 'react';
import ToDoItem from './ToDoItem';

// Example To Do Data: 
const  initialToDos = [
    {id: 1, text: "Walk the dog", completed: true}, 
    {id: 2, text: "Water the plant", completed: true}, 
    {id: 3, text: "Shop for auto loan", completed: false}, 
    {id: 4, text: "Excercise", completed: true}, 
    {id: 5, text: "Shop for clothes", completed: true}, 
]; 


function ToDoList() {
    // Component Functionality: 
    const [todos, setToDos] = useState(initialToDos)

    // Remove To Do Item: 
    const removeToDo = (id) =>{
        setToDos(previousToDo => {
           return previousToDo.filter(t => t.id !==id)
        })
    }

    // Toggle To Do Function: 
const toggleToDo = (id) =>{
    setToDos(
        previousToDo => {
            return previousToDo.map(todo =>{
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed}
                } else { return todo}
            })
        }
    )
}


    // To Do List Form: 
    return (
        <>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}></List>
        {/* Map to pass our data to the ToDoItem Prop */}
            {todos.map((todo) =>{
                console.log(todo)
                // Outputs our ToDoItem Component
              return  <ToDoItem 
              todos = {todo} 
              key={todo.id} 
              remove = {()=> removeToDo(todo.id)}
              toggle = {()=> toggleToDo(todo.id)}/>
              
            }) }
            
        </>
      );


}

export default ToDoList