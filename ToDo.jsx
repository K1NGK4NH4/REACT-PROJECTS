import React, { useState } from 'react'

function ToDo() {

    const [todo, setToDO] = useState([])

    const handleAddTodo = () => {
        const newTodo = document.getElementById('todo').value
        document.getElementById('todo').value = ""
        setToDO(t => [...t, newTodo])

    }
    const handleRemoveTodo = (index) => {
        setToDO(t => t.filter((_, i) => i !== index))
    }
    const handleGoUpTodo = (index) => {
        if (index > 0) {
            const updatedTask = [...todo];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
            setToDO(updatedTask)
        }
    }
    const handleGoDownTodo = (index) => {
        if (index < todo.length - 1) {
            const updatedTask = [...todo];
            [updatedTask[index + 1], updatedTask[index]] = [updatedTask[index], updatedTask[index + 1]];
            setToDO(updatedTask)
        }
    }
    const handleReset=()=>{
        setToDO(todo=>[])
    }
    return (<div className='container'>
        <h1>To-Do-List</h1>
      <div className='input'><input type="text" id="todo" placeholder='Enter to TODO List...' className='todo-input'/>
      <button onClick={handleAddTodo} className='btn-add'>Add to List</button></div>
        <ul className='list-box'>
            {todo.map((element, index) =>
                <li key={index} className='list'>
                   <input type="checkbox" />
                    <span className='element'>{element}</span>
                  <button onClick={() => handleRemoveTodo(index)} className='btn'>Delete</button>
                    <button onClick={() => handleGoUpTodo(index)} className=' btn-updown'>⬆</button>
                    <button onClick={() => handleGoDownTodo(index)} className='btn-updown'>⬇</button>
                </li>)}
        </ul>
        <button onClick={handleReset} className='btn-add'>Reset</button>
    </div>)
}

export default ToDo
