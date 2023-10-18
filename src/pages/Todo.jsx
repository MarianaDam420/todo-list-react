
import { useState, useRef, useEffect } from "react";
import ListItem from "../components/ListItem";
import { v4 as uuidv4 } from "uuid";

function Todo (){

             //useState -> [state, setState]

    const [todos, setTodos]= useState([]); 
    const inputRef = useRef (null);
/*             //Dependency list is null exec once

useEffect(()=>{
     console.log("useEffect");
            //fetch api
            //initialize connection
}, []);

        //without DependencyList exec each time state changes
useEffect(()=>{
//check size of a container

    console.log("useEffect");
           
});
*/

useEffect(()=>{
    console.log("useEffect", todos);
           
}, [todos]);

              //Add a new ToDo

    const addTodo = () => {
        const todoValue = inputRef.current.value;

const newTodo = {name: todoValue, id: uuidv4()}
        
        console.log(todoValue);
        console.log("before", todos);
        setTodos([newTodo, ...todos]);
        console.log("after", todos);
        inputRef.current.value ="";

    };

    const deleteTodo = (id) => { 'deleteTodo'
     setTodos(todos.filter((item)=> item.id !== id));

     };


return (
    <div className="flex flex-col gap-2">
    <div className="flex gap-2">
        <input  
        ref={inputRef} 
        type="text" 
        className="bg-slate-[400] rounded-md p-2"/>
            <button onClick={addTodo} className="bg-indigo-600 rounded-md px-4 py-2">Add</button>
    </div>
    
    <ul className="flex flex-col gap-2">


        {
            todos.map((value, index)=>{
                return<ListItem key={value.id} text={value.name} onDelete={()=> deleteTodo(value.id)}/>;
            })
        }

 


    </ul>
    </div>


)

}

export default Todo;