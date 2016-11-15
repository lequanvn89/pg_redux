import React from 'react';

import Todo from './todo';
import todoActions from './todo-actions';


class TodoContainer extends React.Component {
    onAddTodo(text) {
        this.props.store.dispatch({
            type: todoActions.ADD_TODO,
            id: this.props.store.getState().length + 1,
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

    render() {
        return (
            <Todo
                todos={this.props.store.getState()}
                onAddTodo={this.onAddTodo.bind(this)}
                onToggleTodo={this.onToggleTodo.bind(this)}
            />
        );
    }
}

TodoContainer.propTypes = {
    store: React.PropTypes.object
};

export default TodoContainer;
