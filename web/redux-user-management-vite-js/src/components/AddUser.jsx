import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid4 } from "uuid";
import { addUser } from "../features/userSlice";

const AddUser = () => {
    const [name,setName] = useState('');
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const dispatch = useDispatch()

    const handleSubmit = e =>{
        e.preventDefault()
        const newUser = {
            id: uuid4(),
            name,
            username,
            email
        }
        dispatch(addUser(newUser))
        setName('')
        setUsername('')
        setEmail('')
    }

  return (
    <form className='mb-6' onSubmit={handleSubmit}>
        <h2 className='text-xl mb-3 '> Add New User</h2>
        <div className='mb-4'>
            <input 
            type='text'
            placeholder='Full Name'
            value={name}
            onChange={(e)=> setName(e.target.value)}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2'
            required
            />
        </div>
        <div className='mb-4'>
            <textarea 
            placeholder='Username'
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2'
            rows='1'
            ></textarea>
        </div>
        <div className='mb-4'>
        <input 
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2'
            required
            />
        </div>
        <button
        type='submit'
        className='w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700'>
            Add User
        </button>
    </form>
  )
}

export default AddUser;