import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo, addTodo, setVisibilityFilter } from './action-creators';
import { visibilityFilters } from './const';
import Todo from './todo';


function mapStateToProps(state) {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onToggleTodo: (id) => {
            dispatch(toggleTodo(id));
        },
        onAddTodo(text) {
            dispatch(addTodo(text));
        },
        onShowAll() {
            dispatch(setVisibilityFilter(visibilityFilters.SHOW_ALL));
        },
        onShowCompleted() {
            dispatch(setVisibilityFilter(visibilityFilters.SHOW_COMPLETED));
        },
    };
}

function getVisibleTodos(todos, filter) {
    if (filter === visibilityFilters.SHOW_COMPLETED) {
        todos = todos.filter((todo) => todo.completed === true);
    }

    return todos;
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
