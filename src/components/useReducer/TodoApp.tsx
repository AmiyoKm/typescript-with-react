import { FormEvent, useReducer, useState } from "react";

type Action =
  | { type: 'add'; payload: string }
  | { type: 'toggle'; index: number }
  | { type: 'delete'; index: number };
type state = {
  text: string;
  done: boolean;
};

const reducer = (state: state[], action: Action) :state[]  => {
  switch (action.type) {
    case "add":
      return [...state,{text:action.payload , done : false}];
    case "toggle":
      return state.map((todo,index)=>
        index===action.index ?{ ...todo , done: !todo.done}: todo
      )
    case "delete":
      return state.filter((_,index)=>
        index!==action.index 
    )
  }
};
const TodoApp = () => {
  const [toDos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");
  function handleTaskAdd(e:FormEvent){
   e.preventDefault();
       if(text) { 
        dispatch({type:'add', payload:text})  
        setText('')
       }
  }
  return (
    <>
      <div className="flex flex-col bg-white shadow-md rounded px-8 py-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Tasks</h1>
        </div>
        <div className="my-4">
            <form onSubmit={handleTaskAdd} className="flex">
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} className="border px-4 py-2 w-full" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add
                </button>
            </form>
        </div>
        <div>
            <ul className="list-none">
                {
                    toDos.length>0 ?  
                    toDos.map((todo:state,index:number)=>
                        <li key={index} className="flex items-center py-2 border-b">
                            <span className={`mr-4 ${todo.done ? 'line-through' : ''}`} style={{width:'100%'}}>
                                {todo.text} 
                            </span>
                            <button onClick={()=>dispatch({type:'toggle',index:index})} className={`bg-${todo.done ? 'red' : 'green'}-500 hover:bg-${todo.done ? 'red' : 'green'}-700 text-white font-bold py-2 px-4 rounded`}>
                              {todo.done ? 'Not Done':'Done'}
                            </button>
                            <button onClick={()=>dispatch({type:'delete',index:index})} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                              Close
                            </button>
                        </li>
                    )
                    
                    : <li className="py-2">Empty</li>
                }
            </ul>
        </div>
       
      </div>
    </>
  );
};

export default TodoApp;
