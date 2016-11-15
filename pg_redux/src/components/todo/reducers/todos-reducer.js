import todoActions from '../todo-actions';
import todoReducer from './todo-reducer';


export default (state = [], action) => {
    switch (action.type) {
        case todoActions.ADD_TODO:
            return [
                ...state,
                todoReducer(undefined, action),
            ];
        case todoActions.TOGGLE_TODO:
            return state.map((todo) => todoReducer(todo, action));
        default:
            return state;
    }
};
