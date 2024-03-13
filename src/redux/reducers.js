import { ADD_TODO, FILTER_TODOS, MARK_ALL_COMPLETED, MARK_COMPLETED, MARK_INCOMPLETE, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH_TERM } from "./ActionTypes";

const initialState = {
    toDos: [],
    filter: "ALL",
    searchTerm: "",
}

const toDoReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                toDos: [...state.toDos, {text: action.payload.text, completed: false}],
                filter: state.filter,
                searchTerm: state.searchTerm,
            }

        case TOGGLE_TODO:
            return {
                toDos: state.toDos.map((todo, index) =>
                index === action.payload.id ? {...todo, completed: !todo.completed} : todo),
                filter: state.filter,
                searchTerm: state.searchTerm,
            }

        case REMOVE_TODO:
            return {
                toDos: state.toDos.filter((todo, index) =>
                index !== action.payload.id ),
                filter: state.filter,
                searchTerm: state.searchTerm,
            }

        case MARK_COMPLETED:
            return {
                toDos: state.toDos.map((todo, index) =>
                index === action.payload.id ? {...todo, completed: true} : todo),
                filter: state.filter,
                searchTerm: state.searchTerm,
            }

        case MARK_INCOMPLETE:
            return {
                toDos: state.toDos.map((todo, index) =>
                index === action.payload.id ? {...todo, completed: false} : todo),
                filter: state.filter,
                searchTerm: state.searchTerm,
            }

        case FILTER_TODOS:
            return {
                toDos: state.toDos,
                filter: action.payload.filter,
                searchTerm: state.searchTerm
            }

        case UPDATE_SEARCH_TERM:
            return {
                toDos: state.toDos,
                filter: state.filter,
                searchTerm:action.payload.searchTerm
            }

        case MARK_ALL_COMPLETED:
            return {
                toDos: state.toDos.map((todo) => ({...todo, completed: true})),
                filter: state.filter,
                searchTerm: state.searchTerm
            }
        
    
        default:
            return state;
    }
}

export default toDoReducer;