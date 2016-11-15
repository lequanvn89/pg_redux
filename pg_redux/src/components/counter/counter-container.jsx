import React from 'react';

import Counter from './counter';
import counterActions from './counter-actions';


class CounterContainer extends React.Component {
    onIncrement() {
        this.props.store.dispatch({ type: counterActions.INCREMENT });
    }

    onDecrement() {
        this.props.store.dispatch({ type: counterActions.DECREMENT });
    }

    render() {
        return (
            <Counter
                count={this.props.store.getState()}
                onIncrement={this.onIncrement.bind(this)}
                onDecrement={this.onDecrement.bind(this)}
            />
        );
    }
}

CounterContainer.propTypes = {
    store: React.PropTypes.object
};

export default CounterContainer;
