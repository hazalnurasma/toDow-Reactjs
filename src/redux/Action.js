import { ADD_TODO, FILTER_TODOS, MARK_ALL_COMPLETED, MARK_COMPLETED, MARK_INCOMPLETE, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH_TERM } from "./ActionTypes";

export const addToDo =  (text) => ({
    type: ADD_TODO,
    payload: {text},
})

export const toggleToDo = (id) => ({
    type: TOGGLE_TODO,
    payload: {id},
})

export const removeToDo = (id) => ({
    type: REMOVE_TODO,
    payload: {id}
})

export const markCompleted = (id) => ({
    type: MARK_COMPLETED,
    payload: {id},
})

export const markIncomplete = (id) => ({
    type: MARK_INCOMPLETE,
    payload: {id},
})

export const filterToDo = (filter) => ({
    type: FILTER_TODOS,
    payload: {filter},
})

export const markAllComplete= () => ({
    type: MARK_ALL_COMPLETED,
    // we don't need payload for markAllComplete section.
})

export const updateSearchTerm= (searchTerm) => ({
    type:UPDATE_SEARCH_TERM,
    payload: {searchTerm},
})