import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {useState} from 'react'

export default function BasicRating() {
  const [value, setValue] = useState(1);
  const [score, setScore] = useState(4)

  return (
  <>
  <h1>Current Score: {score}</h1>
    
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={score}
        onChange={(event, newValue) => {
          setScore(newValue);
        }}
      />
      

    </>
  );
}