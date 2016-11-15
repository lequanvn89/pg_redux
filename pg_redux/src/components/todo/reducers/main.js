import { combineReducers } from 'redux';

// import ownCombineReducers from '../../redux-from-scratch/combine-reducers';
import todos from './todos';
import visibilityFilter from './visibility-filter';


/* Without Redux's combineReducers */
// export default (state = {}, action) => {
//     return {
//         todos: todos(state.todos, action),
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     }
// }

/* Own combineReducers from scratch */
// export default ownCombineReducers({
//     todos,
//     visibilityFilter,
// })

/* Redux combineReducers */
export default combineReducers({
    todos,
    visibilityFilter,
})
