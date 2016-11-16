import React from 'react';

import Todo from './todo';
import { todo as todoActions, visibility as visibilityActions } from './actions';
import { visibilityFilters } from './const';


class TodoContainer extends React.Component {
    onAddTodo(text) {
        this.context.store.dispatch({
            type: todoActions.ADD_TODO,
            id: this.context.store.getState().todos.length + 1,
            text,
            completed: false,
        });
    }

    onToggleTodo(id) {
        this.context.store.dispatch({
            type: todoActions.TOGGLE_TODO,
            id: id,
        });
    }

    onShowAll() {
        this.context.store.dispatch({
            type: visibilityActions.SET_FILTER,
            filter: visibilityFilters.SHOW_ALL,
        });
    }

    onShowCompleted() {
        this.context.store.dispatch({
            type: visibilityActions.SET_FILTER,
            filter: visibilityFilters.SHOW_COMPLETED,
        });
    }

    render() {
        const storeState = this.context.store.getState();

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

TodoContainer.contextTypes = {
    store: React.PropTypes.object,
};

export default TodoContainer;
