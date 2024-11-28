import React, {  useEffect, useRef, useState } from 'react'
import { Tasks } from './Tasks';

export const Todo = () => {

  const [task,setTask] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) :[
    {id:0,title:"Learning New things",isComplete:false}
  ])

  useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(task))
  },[task])

  const AddTask=()=>{
    const inputText = inputRef.current.value.trim()
    if(inputText === "") return null
    const newTodo = {
      id:task.length,
      title:inputText,
      isComplete:false
    }
    setTask([...task,newTodo])    
    inputRef.current.value =""
  }

  const inputRef = useRef()

  const toggleTask = (id) =>{
    setTask((prev)=>{
      return prev.map((todo)=>{
        if(id===todo.id){
          return {...todo,isComplete:!todo.isComplete}
        }
        return todo
      })
    })
  }

  const DeleteTask = (id) =>{
    setTask((prev)=>{
      return prev.filter((todo)=> todo.id !== id)
    })
  }

  return (
    <>
      <div className="w-[30-rem]">
        <h1 className="text-lg my-2 font-medium text-amber-500">To-Do List</h1>
        <div className='flex gap-2'>
          <div className='flex-1'>
            <input type="text" ref={inputRef}  placeholder='Add your task.....'  className=' py-3 px-4 w-full border-none focus:outline-none'/>
          </div>
          <button onClick={()=>AddTask() } className='text-sm font-medium border-none rounded-sm py-3 px-4 bg-blue-600 text-white hover:bg-blue-800' type='submit'>Add Task</button>
        </div>
        <p className='my-3 text-zinc-400 px-1 text-sm'>Task Details</p>
        <div  className="w-[30-rem] bg-white shadow py-6 px-4" >
          <fieldset className='space-y-5'>
            <legend className='text-sm font-medium text-amber-600'>List of Task</legend>
            {
              task.map((tasks,index)=>{
                return  <Tasks text={tasks.title} isComplete={tasks.isComplete} key={index}  id={tasks.id} toggleTask={toggleTask} DeleteTask={DeleteTask}/>
              })
            }
          </fieldset>
        </div>
      </div>
    </>
  )
}
