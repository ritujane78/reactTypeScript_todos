import React from "react";
import {TodoRowItem} from "./TodoRowItem";
import { Todo } from "../models/TodoModel";

export const TodoTable: React.FC<{
  todos: Todo[], 
  deleteTodo: Function
  }> = (props) => {


    return( 
        <table className='table table-hover'>
          <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Assigned</th>
            </tr>
          </thead>
          <tbody>
          {props.todos.map((todo: Todo) => (
            <TodoRowItem
            key={todo.todoNumber}
            todoNumber={todo.todoNumber}
            todoDescription={todo.todoDescription}
            todoAssignee={todo.todoAssignee}
            deleteTodo = {props.deleteTodo}
            />
          ))}
          </tbody>
        </table>
    )
}
