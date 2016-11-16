import { todoActions, visibilityActions } from './const';


function generateId() {
    return parseInt(Math.random() * 1000000, 10);
}

function toggleTodo(id) {
    return {
        type: todoActions.TOGGLE_TODO,
        id: id,
    };
}

function addTodo(text) {
    return {
        type: todoActions.ADD_TODO,
        id: generateId(),
        text,
        completed: false,
    };
}

function setVisibilityFilter(filter) {
    return {
        type: visibilityActions.SET_FILTER,
        filter: filter,
    };
}

export {
    toggleTodo,
    addTodo,
    setVisibilityFilter,
};
