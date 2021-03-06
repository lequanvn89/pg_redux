import counterActions from './counter-actions';


export default (state = 0, action) => {
    switch (action.type) {
        case counterActions.INCREMENT:
            return state + 1;
        case counterActions.DECREMENT:
            return state - 1;
        default:
            return state;
    }
};
