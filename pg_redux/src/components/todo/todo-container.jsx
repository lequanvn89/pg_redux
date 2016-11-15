import React from 'react';

import Todo from './todo';
import { todo as todoActions, visibility as visibilityActions } from './actions';
import { visibilityFilters } from './const';


class TodoContainer extends React.Component {
    onAddTodo(text) {
        this.props.store.dispatch({
            type: todoActions.ADD_TODO,
            id: this.props.store.getState().todos.length + 1,
            text,
            completed: false,
        });
    }

    onToggleTodo(id) {
        this.props.store.dispatch({
            type: todoActions.TOGGLE_TODO,
            id: id,
        });
    }

    onShowAll() {
        this.props.store.dispatch({
            type: visibilityActions.SET_FILTER,
            filter: visibilityFilters.SHOW_ALL,
        });
    }

    onShowCompleted() {
        this.props.store.dispatch({
            type: visibilityActions.SET_FILTER,
            filter: visibilityFilters.SHOW_COMPLETED,
        });
    }

    render() {
        const storeState = this.props.store.getState();

        return (
            <Todo
                todos={storeState.todos}
                visibilityFilter={storeState.visibilityFilter}
                onAddTodo={this.onAddTodo.bind(this)}
                onToggleTodo={this.onToggleTodo.bind(this)}
                onShowAll={this.onShowAll.bind(this)}
                onShowCompleted={this.onShowCompleted.bind(this)}
            />
        );
    }
}

TodoContainer.propTypes = {
    store: React.PropTypes.object
};

export default TodoContainer;
