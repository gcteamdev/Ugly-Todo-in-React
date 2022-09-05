import React from 'react';

const TodoList = ({savedItem, setSavedItem}) => {

    const deleteHandler = (key) => {
        const newList = savedItem.filter(list =>{ return list.key!== key});
        setSavedItem(newList);
    }
    return (
        <div >
            {savedItem.map(task =>{
               return (
                <div className="col-md-6 mx-auto text-center bg-dark text-white">
                <h1>{task.item}</h1>
                <h3>{task.whenDue}</h3>
                <button onClick={()=>deleteHandler(task.key)}>Delete</button>
                </div>
               )
            })}
            
        </div>
    );
};

export default TodoList;