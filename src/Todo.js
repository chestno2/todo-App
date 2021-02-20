import { Avatar, List, ListItem,ListItemAvatar,ListItemText } from '@material-ui/core'
import React from 'react'
import "./Todo.css"

function Todo(props) {
    return (
        <List className="todo_list">
            <ListItem>

            <ListItemAvatar>
            <Avatar>
                
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary="TodoItems" secondary= {props.text} ></ListItemText>
            </ListItem>
        </List>
    )
}

export default Todo
