/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { PiToggleLeftDuotone, PiToggleRightDuotone, PiCheckFatDuotone } from "react-icons/pi";
import { markCompleted, markIncomplete, toggleToDo } from '../redux/Action';
import { FaTimes } from "react-icons/fa";

const ToDoItem = ({ todo, index }) => {
    const dispatch = useDispatch();

    return (
        <li className='flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4'>
            <div className='mt-4 flex items-center'>
                <span className='mr-4 text-gray-400'>{index + 1}</span>
                <span className={todo.completed ? 'mr-4 text-gray-400 line-through' : 'mr-4 text-white'}>{todo.text}</span>
            </div>
            <div className='space-x-3 ml-8'>
                {/* if todo completed toogle shows the left side, if its not then shows right side. it its completed users gonna see only times button, if its not users gonna see check button. */}
                <button onClick={() => dispatch(toggleToDo(index))} className='mr-2 text-sm text-white bg-gray-500 sm:px-2 py-1 rounded'>
                    {todo.completed ? <PiToggleLeftDuotone className='text-white w-6 h-6' /> : <PiToggleRightDuotone className='text-white rounded w-6 h-6' />}
                </button>
                {
                    !todo.completed && (
                    <button onClick={() => dispatch(markCompleted(index))} className='mr-2 text-sm bg-green-700 text-white sm:px-2 py-1 rounded'>
                    <PiCheckFatDuotone className='w-6 h-6'/>
                    </button>
                    )
                }
                {
                    todo.completed && (
                    <button onClick={() => dispatch(markIncomplete(index))} className='mr-2 text-sm bg-red-700 text-white sm:px-2 py-1 rounded'>
                    <FaTimes className='w-6 h-6'/>
                    </button>
                    )
                }
            </div>
        </li>
    );
};

export default ToDoItem;
