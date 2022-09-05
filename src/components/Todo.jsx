import React,{useState} from 'react';
import TodoList from "./TodoList"

const Todo = () => {

    
const [currentItem, setItem] =  useState("");
const [due, setDue] = useState("");


const [savedItem, setSavedItem] =  useState([]);

const nameHandler =(e) =>{
   setItem(e.target.value);
}

const dueHandler =(e) =>{
    setDue(e.target.value);
}
const saveHandler =(e) => {
    setSavedItem([...savedItem, {item: currentItem, whenDue:due, key:Date.now()}]);
    setItem("");
    setDue("");
    e.preventDefault();
   
}





    return (

        <>  <h1 className="col text-center"> Ugly Todo list </h1>
            <div className="col text-center bg-primary mt-5 p-5" >
                <input onChange={nameHandler} placeholder="enter a task" value={currentItem} required/>
                <br></br>
                <input onChange={dueHandler}  placeholder="task due by?" type="date" value={due} required/>
                <br></br>
                <button onClick={saveHandler}>Save</button>
            </div>
            <TodoList savedItem={savedItem} setSavedItem={setSavedItem}/>
            
         </>
        
    );

    
    };
export default Todo;