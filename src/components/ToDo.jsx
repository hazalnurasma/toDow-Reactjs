/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { CiCirclePlus, CiSearch } from "react-icons/ci";
import { addToDo, updateSearchTerm } from '../redux/Action';
import FilterButtons from './FilterButtons';
import ToDoList from './ToDoList';

function ToDo() {

    const dispatch = useDispatch();

    const [newToDoText, setNewToDoText] = useState("");
    const [searchTerm, setSearchTerm] = useState("");



    const handleAddToDo = (text) => {
        dispatch(addToDo(text))
    };

    const handleAddToDoClick = () => {
        if(newToDoText.trim() !== ""){
            handleAddToDo(newToDoText.trim());
            setNewToDoText("")
        }
    };

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        dispatch(updateSearchTerm(value));
    };

    return (
        <div className='max-w-4xl mx-auto sm:mt-24 p-4 bg-gray-400 bg-opacity-50 rounded backdrop-filter backdrop-blur-lg'>
            <h2 className='mt-3 mb-6 text-2xl font-bold text-center text-white uppercase'> Hazal's To-Do App </h2>

            {/* input text and buttons */}

            <div className='flex items-center mb-4'>
                <input 
                value={newToDoText}
                onChange={(e) => setNewToDoText(e.target.value)}
                type="text"
                name="addToDoInput"
                id="addToDoInput"
                placeholder='Add To-Do'
                className='flex-grow p-2 border-b-2 border-gray-300 focus: outline-none focus:border-purple-600 rounded'
                />

                <button className='ml-4 p-2 bg-blue-800 hover:bg-blue-900 text-white rounded focus:outline-none border border-gray-400' onClick={handleAddToDoClick}>
                    <CiCirclePlus className='w-7 h-7'/>
                </button>
            </div>

            {/* filter and search */}

            <div className='flex items-center justify-between'>

                <FilterButtons />
                <div className='flex items-center mb-4'>
                    
                    <input 
                    value={searchTerm}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    type="text"
                    name="searchInput"
                    id="searchInput"
                    placeholder='Search'
                    className='flex-grow p-2 border-b-2 border-gray-300 focus: outline-none focus:border-purple-600 rounded'
                    />

                    <button className='ml-4 p-2 bg-fuchsia-800 hover:bg-fuchsia-950 text-white rounded focus:outline-none border border-gray-400'>
                        <CiSearch className='w-7 h-7'/>
                    </button>
                </div>
            </div>
            <ToDoList />
        </div>
    );
}

export default ToDo;