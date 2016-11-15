import todoActions from '../todo-actions';


export default (state, action) => {
    switch (action.type) {
        case todoActions.ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case todoActions.TOGGLE_TODO:
            let result;
            if (state.id === action.id) {
                result = {
                    ...state,
                    completed: !state.completed,
                };
            } else {
                result = state;
            }
            return result;
        default:
            return state;
    }
}
