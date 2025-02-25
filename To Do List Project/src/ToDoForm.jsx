import  ListItem  from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Create from "@mui/icons-material/Create"
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";

function ToDoForm({addToDo}) {
const [text, setText] = useState(""); 

// Event Listener: 
const handleChange = (event) =>{
    setText(event.target.value); 
}

const handleSubmit = (event) =>{
    event.preventDefault()
    addToDo(text);
    setText("");
}
    return (
       
<>
<ListItem>
    <form onSubmit={handleSubmit}>
    <TextField 
    id="outlined-basic" 
    label="New To Do" 
    variant="outlined" 
    onChange={handleChange}
    value={text}
    InputProps={{
        endAdornment: (
            <InputAdornment position="end">
            <IconButton aria-label="Create To Do" edge="end" type="submit">
                <Create></Create>
                </IconButton>
            </InputAdornment>
        ), 
    }}

    
></TextField>
</form>
</ListItem>

</>      
            
    )
}



export default ToDoForm; 