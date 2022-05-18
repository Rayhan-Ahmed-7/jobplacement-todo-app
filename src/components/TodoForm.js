import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AiFillPlusCircle } from 'react-icons/ai';
import Todo from './Todo';
const TodoForm = () => {
    const [todos, setTodos] = useState([]);
    const [refetch, setRefetch] = useState(false);
    useEffect(() => {
        fetch('https://morning-atoll-26204.herokuapp.com/todos')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTodos(data);
            })
    }, [refetch]);
    const handleForm = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const todo = {
            title,
            description
        }
        if (title || description) {
            const loading = toast.loading('loading...')
            fetch('https://morning-atoll-26204.herokuapp.com/todos', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(todo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.dismiss(loading);
                    toast.success('Successfully added!');
                    e.target.reset()
                    setRefetch(!refetch);
                })
        }
        //console.log(todo);
    }
    //handle delete
    const handleDelete = (id) => {
        const sure = window.confirm('are you sure..?');
        if (sure) {
            const deleteLoading = toast.loading('deleting...');
            fetch(`https://morning-atoll-26204.herokuapp.com/todos/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                        toast.dismiss(deleteLoading);
                        toast.success('Successfully deleted!');
                        setRefetch(!refetch);
                    }
                })
        }
    }
    const colors = [
        'bg-gradient-to-br from-[#FD89AC] to-[#F55585]',
        'bg-gradient-to-br from-[#FFD09A] to-[#FFA944]',
        'bg-gradient-to-br from-[#A490F3] to-[#927EFB]',
        'bg-gradient-to-br from-[#85E3FD] to-[#46C6EB]'
    ];
    return (
        <>
            <div className='w-full flex justify-center mt-10'>
                <form action="" onSubmit={handleForm} className='p-4 flex-1 max-w-md bg-white  shadow-2xl rounded-xl'>
                    <input className='block w-full border-b-2 outline-none focus-within:border-b-rose-500 mt-4 bg-transparent' type="text" name="title" placeholder='Add Title' required />
                    <textarea className='block w-full border-b-2 outline-none focus-within:border-b-rose-500 mt-4 bg-transparent' name="description" placeholder='Add description' required />
                    <div className="flex justify-end">
                        <button className='block mt-4' type='submit'><AiFillPlusCircle className='text-rose-500 text-4xl' /></button>
                    </div>
                </form>
            </div>
            <div className='w-10/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-10'>
                {
                    todos.map(todo => <Todo key={todo._id} todo={todo} handleDelete={handleDelete} colors={colors}></Todo>)
                }
            </div>
        </>
    );
};

export default TodoForm;