import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { BsFillCheckCircleFill } from 'react-icons/bs';
const Todo = ({todo,handleDelete}) => {
    const random = Math.floor(Math.random()*4);
    const [complete,setComplete] = useState(false);
    const {_id,title,description} = todo;
    //pink g = #FD89AC / #F55585
    //orange g = #FFD09A / #FFA944
    //blue g = #A490F3 / #927EFB
    //blue g = #85E3FD / #46C6EB
    const colors = [
        'bg-gradient-to-br from-[#FD89AC] to-[#F55585]',
        'bg-gradient-to-br from-[#FFD09A] to-[#FFA944]',
        'bg-gradient-to-br from-[#A490F3] to-[#927EFB]',
        'bg-gradient-to-br from-[#85E3FD] to-[#46C6EB]'
    ];
    //console.log(random);
    const handleComplete = ()=>{
        setComplete(!complete);
    }
    return (
        <div className={`${colors[random]} text-white rounded-2xl p-6 relative`}>
            <h2 className={`text-2xl font-bold ${complete ? 'line-through':''}`}>{title}</h2>
            <p className={`${complete ? 'line-through':''}`}>{description}</p>
            <button onClick={()=>handleDelete(_id)} className="absolute bottom-3 right-3 w-10 h-10 shadow-xl rounded-full flex justify-center items-center cursor-pointer"><FaTrash className='text-2xl hover:text-gray-200'/></button>
            <button onClick={handleComplete} className="absolute top-3 right-3 w-10 h-10 shadow-xl rounded-full flex justify-center items-center cursor-pointer"><BsFillCheckCircleFill className='text-2xl hover:text-gray-200'/></button>
        </div>
    );
};

export default Todo;