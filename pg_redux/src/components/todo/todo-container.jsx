import React from 'react';
import { connect } from 'react-redux';

import Todo from './todo';
import { todo as todoActions, visibility as visibilityActions } from './actions';
import { visibilityFilters } from './const';


function mapStateToProps(state) {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onToggleTodo: (id) => {
            dispatch({
                type: todoActions.TOGGLE_TODO,
                id: id,
            });
        },
        onAddTodo(text) {
            dispatch({
                type: todoActions.ADD_TODO,
                id: generateId(),
                text,
                completed: false,
            });
        },
        onShowAll() {
            dispatch({
                type: visibilityActions.SET_FILTER,
                filter: visibilityFilters.SHOW_ALL,
            });
        },
        onShowCompleted() {
            dispatch({
                type: visibilityActions.SET_FILTER,
                filter: visibilityFilters.SHOW_COMPLETED,
            });
        },
    };
}

function getVisibleTodos(todos, filter) {
    if (filter === visibilityFilters.SHOW_COMPLETED) {
        todos = todos.filter((todo) => todo.completed === true);
    }

    return todos;
}

function generateId() {
    return parseInt(Math.random() * 1000000, 10);
}

class TodoContainer extends React.Component {
    componentDidMount() {
        this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <Todo
                todos={this.props.todos}
                onAddTodo={this.props.onAddTodo}
                onToggleTodo={this.props.onToggleTodo}
                onShowAll={this.props.onShowAll}
                onShowCompleted={this.props.onShowCompleted}
            />
        );
    }
}

TodoContainer.propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number,
        text: React.PropTypes.string,
        completed: React.PropTypes.bool,
    })),
    onAddTodo: React.PropTypes.func,
    onToggleTodo: React.PropTypes.func,
    onShowAll: React.PropTypes.func,
    onShowCompleted: React.PropTypes.func,
};

TodoContainer.contextTypes = {
    store: React.PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
