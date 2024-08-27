
import { useState } from "react"
import Button from 'react-bootstrap/Button';

import './TodoApp.css'
function TodoList(){
    const [checked, setChecked] = useState(false);
    const [todos,setTodos]=useState([])
    const [todo,settodo]=useState('')
    function addTodo(){
        if(todo.length === 0){
            return;
        }
        setTodos([...todos,todo]);
        settodo('');
    }
    function deleteTodo(todoIndex){
        todos.splice(todoIndex,1)
        setTodos([
            ...todos
        ]
            
        )
    }
    return(
        <div className="todo-container d-flex flex-column justify-content-center align-items-center">
            <div className="searchBar">
                <h1>Todo-App</h1>
                <div className="search-area">
                    
                    <input className="inputbar" size="lg" value={todo} onChange={(e)=>settodo(e.target.value)}></input>
                    <Button onClick={addTodo} as="input" type="submit" value="Submit" />
                </div>
            </div>
            <div>
                {
                     todos.map(
                        (todolist,index)=>
                        <div className="todo-list">
                            <div className="todo-name">
                                {index+1}{'.'}
                                {todolist}
                            </div>
                            <div className="checkbox">
                                <div className="done">
                                Done<input type='checkbox' />
                                </div>
                                <Button className='lightbtn' size="sm" variant="danger" onClick={()=>deleteTodo(index)}>Delete</Button>
                            </div>
                        </div>
                    )
                }
                
            </div>
        </div>
    )
}




export default TodoList