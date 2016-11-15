import React from 'react';

class Counter extends React.Component {
    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>{this.props.count}</div>
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement}>-</button>
            </div>
        );
    }
}

Counter.propTypes = {
    count: React.PropTypes.number,
    onIncrement: React.PropTypes.func,
    onDecrement: React.PropTypes.func
};

export default Counter;
