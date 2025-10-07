
import React from "react"
export const TodoRowItem: React.FC<{
        todoNumber: number, 
        todoDescription: string, 
        todoAssignee: string, 
        deleteTodo: Function
}> = (props) =>{
    return (
        <tr onClick = {() => props.deleteTodo(props.todoNumber)}>
            <th scope='row'>{props.todoNumber}</th>
            <td>{props.todoDescription}</td>
            <td>{props.todoAssignee}</td>
        </tr>
    )      
}