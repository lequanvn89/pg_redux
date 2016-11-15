import todos from './todos';
import visibilityFilter from './visibility-filter';


export default (state = {}, action) => {
    return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    }
}
