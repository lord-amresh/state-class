import { useState } from "react"


export default function TodoList () {
    let [todos, setTodos] = useState(["Sample Task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos ([...todos, newTodo]);
        setNewTodo("");
    };

    let updateTodoValue = (Event) => {
        setNewTodo(Event.target.value);
    };
    
    return (
        <div>
            <input placeholder="Add a Task" value={newTodo} onChange={updateTodoValue}></input>
            <br></br><br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br><br></br><br></br>

            <hr></hr>
            <h4>Tasks TO Do.</h4>
            <ul>
               {
                todos.map((todo) => {
                    return <li> {todo} </li>
                })
               } 
            </ul>
        </div>
    );
}