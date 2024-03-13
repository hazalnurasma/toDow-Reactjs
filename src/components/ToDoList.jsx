import React from 'react';
import { useSelector } from 'react-redux';

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
        <div className='text-white'>ToDoList</div>
    )
}

export default ToDoList;