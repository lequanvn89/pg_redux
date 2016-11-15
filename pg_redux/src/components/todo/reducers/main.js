import { combineReducers } from 'redux';

import todos from './todos';
import visibilityFilter from './visibility-filter';


/* Without Redux's combineReducers */
// export default (state = {}, action) => {
//     return {
//         todos: todos(state.todos, action),
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     }
// }

export default combineReducers({
    todos,
    visibilityFilter,
})
