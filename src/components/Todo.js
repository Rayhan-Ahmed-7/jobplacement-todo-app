import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { BsFillCheckCircleFill } from 'react-icons/bs';
const Todo = ({todo,handleDelete,colors}) => {
    const [complete,setComplete] = useState(false);

    const {_id,title,description} = todo;

    const handleComplete = ()=>{
        setComplete(!complete);
    }
    return (
        <div className={`${colors[Math.floor(Math.random()*4)]} text-white rounded-2xl p-6 relative`}>
            <h2 className={`text-2xl font-bold ${complete ? 'line-through':''}`}>{title}</h2>
            <p className={`${complete ? 'line-through':''}`}>{description}</p>
            <button onClick={()=>handleDelete(_id)} className="absolute bottom-3 right-3 w-10 h-10 shadow-xl rounded-full flex justify-center items-center cursor-pointer"><FaTrash className='text-2xl hover:text-gray-200'/></button>
            <button onClick={handleComplete} className="absolute top-3 right-3 w-10 h-10 shadow-xl rounded-full flex justify-center items-center cursor-pointer"><BsFillCheckCircleFill className='text-2xl hover:text-gray-200'/></button>
        </div>
    );
};

export default Todo;