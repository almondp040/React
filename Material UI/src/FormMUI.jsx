import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

import Slider from '@mui/material/Slider';

function FormMUI() {
const [name, setName] = useState(""); 
const [volume, setVolume] = useState(50)

// Event Listeners
const updateName = (event) =>{
    setName(event.target.value)
}

const volumeChange = (event, newValue)=>{
    setVolume(newValue)
}
    return(
        <>
        <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' }, border: '5px solid red', p: 2, textAlign: 'center'}}
      noValidate
      autoComplete="off"
    >
    <h1>Puppy's Name is: {name}</h1>
      <TextField 
      id="outlined-basic" 
      label="Puppy Name" 
      variant="outlined"  
      placeholder='Fido' 
      value={name} 
      onChange={updateName}
      />

<h2>Volume: {volume}</h2>
<Slider aria-label="Volume" value={volume} onChange={volumeChange} />


    </Box>

    </>
    )
}

export default FormMUI