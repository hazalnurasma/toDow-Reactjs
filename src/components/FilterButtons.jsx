import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterToDo, markAllComplete } from "../redux/Action";

const FilterButtons = () => {

    const dispatch = useDispatch();
    const currentFilter = useSelector((state) => state.filter);

    const handleFilter =(filter) => {
        dispatch(filterToDo(filter))
    }

    return (
        <div className="flex space-x-4 items-center">
            <select
            value={currentFilter}
            onChange={(e) => handleFilter(e.target.value)}
            className="text-sm px-2 py-2 rounded border-pink-400 focus: outline-none"> 
                <option value="ALL">Default</option>
                <option value="COMPLETED">Completed</option>
                <option value="INCOMPLETE">Incomplete</option>
            </select>

            <button onClick={() => dispatch(markAllComplete())} className="text-sm px-2 py-2 bg-purple-600 text-white ml-2 rounded">
                Mark All Completed
            </button>
        </div>
    )
}

export default FilterButtons