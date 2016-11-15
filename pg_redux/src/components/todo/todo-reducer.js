import todoActions from './todo-actions';


export default (state = [], action) => {
    switch (action.type) {
        case todoActions.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case todoActions.TOGGLE_TODO:
            return state.map((todo) => {
                let result;
                if (todo.id === action.id) {
                    result = {
                        ...todo,
                        completed: !todo.completed,
                    };
                } else {
                    result = todo;
                }
                return result;
            });
        default:
            return state;
    }
};
