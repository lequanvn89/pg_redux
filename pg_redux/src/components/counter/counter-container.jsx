import React from 'react';

import Counter from './counter';
import counterActions from './counter-actions';


class CounterContainer extends React.Component {
    componentDidMount() {
        this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onIncrement() {
        this.context.store.dispatch({ type: counterActions.INCREMENT });
    }

    onDecrement() {
        this.context.store.dispatch({ type: counterActions.DECREMENT });
    }

    render() {
        return (
            <Counter
                count={this.context.store.getState()}
                onIncrement={this.onIncrement.bind(this)}
                onDecrement={this.onDecrement.bind(this)}
            />
        );
    }
}

CounterContainer.propTypes = {
    store: React.PropTypes.object
};

CounterContainer.contextTypes = {
    store: React.PropTypes.object,
};

export default CounterContainer;
