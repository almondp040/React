import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';


function ToDoItem({todos, remove, toggle}) {

    console.log(todos); 

    const labelId = `checkbox-list-label-${todos.id}`;


          return (
            <ListItem
              key={todos.id}
              secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={remove}>
                  <CommentIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={todos.completed}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    onChange={toggle}
                    
                  />
                </ListItemIcon>
                <ListItemText id={todos.id} primary={todos.text} />
              </ListItemButton>
            </ListItem>
          );
        
      
    
}

export default ToDoItem