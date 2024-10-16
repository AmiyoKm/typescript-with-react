import React, { useState } from "react";
type todo = {
    work: string;
    time: string;
    done: boolean;
};
const TodoList = () => {
    const [todo, setTodo] = useState<todo[]>([]);
    const [work, setWork] = useState("");
    const [time, setTime] = useState("");
    const [done, setDone] = useState(false);
    const [disable , setDisable] = useState(true)
    function handleWorkAdd(event: React.ChangeEvent<HTMLInputElement>) {
        setWork(event.target.value);
        
    }
    function handleTimeAdd(event: React.ChangeEvent<HTMLInputElement>) {
        setTime(event.target.value);
        setDisable(false)
        
    }
    function handleAlreadyDone() {
        setDone(!done);
    }
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event?.preventDefault();
        const newTodo : todo ={
            work,
            time,
            done
        }
        setTodo([...todo, newTodo]);
        setWork("");
        setTime("");
        setDone(false);
        setDisable(true)
    }
    function handleRemove(index: number) {
        let copyTodo = todo;
        copyTodo.splice(index, 1);
        setTodo([...copyTodo]);
    }

    return (
        <div className="font-serif">
            <h1>Todo List</h1>
            <ul>
            { todo.length>0 ? 
                todo.map((todoItem : todo , index) =>
                <li className="m-5"  key = {index}>
                    <span className="mr-5">{todoItem.work}</span>
                    <span className="mr-5">{todoItem.time}</span>
                    <span className="mr-5">{todoItem.done ? "Done" : "Not Done"}</span>
                    <span className="mr-5" onClick={()=>handleRemove(index)}> X</span>
                </li> ) : <li>No task at the moment</li>
            }
            </ul>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="enter work"
                        type="text"
                        className="border-2"
                        value={work}
                        onChange={handleWorkAdd}
                    />
                    <input
                        placeholder="enter time"
                        type="text"
                        className="border-2"
                        value={time}
                        onChange={handleTimeAdd}
                    />
                    <button disabled={disable} onClick={handleAlreadyDone} className="border-4">
                        {!disable ? "Done" : "Not Done"}
                    </button>
                    <button disabled={disable} className="border-4" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TodoList;
