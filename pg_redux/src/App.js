import React, {Component} from 'react';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';

import CounterContainer from './components/counter/counter-container'
import counterReducer from './components/counter/counter-reducer';


/* Own store from scratch */
// const createOwnStore = (reducer) => {
//     let state;
//     let listeners = [];
//
//     const getState = () => state;
//
//     const dispatch = (action) => {
//         state = reducer(state, action);
//         listeners.forEach(listener => listener());
//     };
//
//     const subscribe = (listener) => {
//         listeners.push(listener);
//         return () => {
//             listeners = listeners.filter(l => l !== listener);
//         };
//     };
//
//     dispatch({});
//
//     return { getState, dispatch, subscribe };
// };

class App extends Component {
    constructor(props) {
        super(props);

        /* Redux store */
        const store = createStore(counterReducer);

        /* Own store from scratch */
        // const store = createOwnStore(counterReducer);

        this.state = { count: store.getState() };

        const render = () => {
            this.setState({ count: store.getState() });
            console.log('-=- NEW STATE -=-');
            console.log(store.getState());
        };
        store.subscribe(render);

        this.store = store;
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <CounterContainer
                    count={this.state.count}
                    store={this.store}
                />
            </div>
        );
    }
}

export default App;
