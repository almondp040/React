// Imports:
import List from '@mui/material/List';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';
import { Box, Typography } from '@mui/material';


// Example To Do Data: 
// const  initialToDos = [
//     {id: 1, text: "Walk the dog", completed: true}, 
//     {id: 2, text: "Water the plant", completed: true}, 
//     {id: 3, text: "Shop for auto loan", completed: false}, 
//     {id: 4, text: "Excercise", completed: true}, 
//     {id: 5, text: "Shop for clothes", completed: true}, 
// ]; 

 const getInitialData = () =>{

   const data = JSON.parse(localStorage.getItem("todos")); 

   if(!data) return []; 
   return data
 }; 

function ToDoList() {
    // Component Functionality: 
    const [todos, setToDos] = useState(getInitialData)

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]); 

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

// Add To Do: 
const addToDo = (text) =>{
    setToDos(previousToDo =>{
     return   [...previousToDo, {id: uuidv4(), text: text, completed: false}]
    })
}


    // To Do List Form: 
    return (
        <>
        <Box sx={{
            display: 'flex', 
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center', 
            m: 3
        }}>
        <Typography variant="h3" component="h3" sx={{ flexGrow: 1 }}>
            To Do Practice
          </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
            <ToDoForm addToDo = {addToDo} />
            </List>
            </Box>
        </>
      );


}

export default ToDoList