import { useState,useEffect } from "react";

function ListItem ({text, onDelete}){
    const [checked, setChecked] = useState(false);
    
    useEffect(()=> {

        console.log("Init");
        return() => {
            console.log("cleanup");
        };
    }, []);


    useEffect(()=> {

       console.log("Checked", checked);
       if (checked) alert("Check");
    }, [checked]);


    const handleCheck = () => {

        setChecked(!checked);
        
    };

return (

    <li 
    className={`flex items-center justify-between rounded-md p-2 bg-indigo-800 
    ${checked ? "text-emerald-300 line-through":null
    }`}>

    <div>
    <input type="checkbox" checked={checked} onChange={handleCheck}/>
    <span>{text}</span>
    </div>
    
    <button 
    onClick={onDelete} 
    className="rounded-md bg-pink-500 p-2 hover:bg-red-700">Delete</button>
    </li>     
     
);


}


export default ListItem; 