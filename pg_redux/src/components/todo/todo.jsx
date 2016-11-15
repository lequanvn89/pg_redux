import React from 'react';

import { visibilityFilters } from './const';


class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodoText: '',
        };
    }

    renderTodoItem(todo) {
        const checkboxAttributes = {
            type: 'checkbox',
        };
        if (todo.completed) {
            checkboxAttributes.checked = true;
        }
        return (
            <div key={todo.id}>
                <input {...checkboxAttributes} onChange={() => this.props.onToggleTodo(todo.id)} />
                {todo.text}
            </div>
        );
    }

    renderTodoItems() {
        let todos = [];

        if (this.props.visibilityFilter === visibilityFilters.SHOW_ALL) {
            todos = this.props.todos;
        } else if (this.props.visibilityFilter === visibilityFilters.SHOW_COMPLETED) {
            todos = this.props.todos.filter((todo) => todo.completed === true);
        }

        return todos.map((todo) => this.renderTodoItem(todo));
    }

    onNewTodoTextChange(ev) {
        this.setState({
            newTodoText: ev.target.value,
        });
    }

    onAddTodo() {
        this.props.onAddTodo(this.state.newTodoText);
        this.setState({ newTodoText: '' });
    }

    render() {
        return(
            <div>
                <h2>Todo</h2>
                <div>
                    <input type='text' value={this.state.newTodoText} onChange={this.onNewTodoTextChange.bind(this)} />
                    <button onClick={this.onAddTodo.bind(this)}>Add</button>
                    <button onClick={this.props.onShowAll}>Show all</button>
                    <button onClick={this.props.onShowCompleted}>Show completed</button>
                </div>
                {this.renderTodoItems()}
            </div>
        );
    }
}

Todo.propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number,
        text: React.PropTypes.string,
        completed: React.PropTypes.bool,
    })),
    visibilityFilter: React.PropTypes.string,
    onAddTodo: React.PropTypes.func,
    onToggleTodo: React.PropTypes.func,
    onShowAll: React.PropTypes.func,
    onShowCompleted: React.PropTypes.func,
};

export default Todo;
