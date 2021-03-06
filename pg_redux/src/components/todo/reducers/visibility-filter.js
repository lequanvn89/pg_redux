import { visibilityActions, visibilityFilters } from '../const';


export default (state = visibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case visibilityActions.SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}
