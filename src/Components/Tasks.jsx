import React, {  } from 'react'

export const Tasks = ({text,isComplete,id,toggleTask,DeleteTask}) => {
  return (
    <div className='flex justify-between items-center gap-3 '>
      <label className={`hover:bg-slate-100 flex-1 p-2 rounded-md select-none cursor-pointer ${isComplete?"line-through":""}`} onClick={()=>toggleTask(id)}>{text}</label>
      <div className='size-[26px] p-1 hover:bg-red-200'>
        <svg className='w-4 cursor-pointer hover:fill-red-700' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 24 24" onClick={()=>DeleteTask(id)}><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path></svg>
      </div>
    </div>
  )
}
