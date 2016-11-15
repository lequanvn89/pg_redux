import { todo as todoActions } from '../actions';
import todoReducer from './todo';


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
