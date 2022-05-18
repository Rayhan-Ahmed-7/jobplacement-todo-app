import React from 'react';
import { FaTrash } from 'react-icons/fa';
const Todo = ({todo}) => {
    const {title,description} = todo;
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
    const random = Math.floor(Math.random()*4);
    console.log(random);
    return (
        <div className={`${colors[random]} text-white rounded-2xl p-6 relative`}>
            <h2 className='text-2xl font-bold'>{title}</h2>
            <p>{description}</p>
            <button className="absolute top-3 right-3 w-10 h-10 shadow-xl rounded-full flex justify-center items-center cursor-pointer"><FaTrash className='text-2xl'/></button>
        </div>
    );
};

export default Todo;