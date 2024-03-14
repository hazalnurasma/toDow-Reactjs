/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
    const filteredToDos = useSelector((state) => {
        const toDos = state.toDos;
        const filter = state.filter;
        const searchTerm = state.searchTerm;

        return toDos.filter((todo) => {
            const matchsFilter = (filter === "COMPLETED" && todo.completed) || (filter === "INCOMPLETE" && !todo.completed) || (filter === "ALL");
            
            const matchsSearch = todo.text.toLowerCase().includes(searchTerm);

            return matchsFilter && matchsSearch
        });
    })

    console.log('Filtered To-Dos: ', filteredToDos);

    return (
        <ul>
            <li className="my-2 text-white text-sm underline">All Your Notes Here:</li>

            {
                filteredToDos.map((todo, index) => (
                    // <li key={index}>{todo.text}</li>
                    <ToDoItem key={index} todo={todo} index={index} />
                ))
            }
        </ul>


    )
}

export default ToDoList;