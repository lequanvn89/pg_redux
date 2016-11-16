import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';

// import createOwnStore from './components/redux-from-scratch/store';
// import CounterContainer from './components/counter/counter-container';
// import counterReducer from './components/counter/counter-reducer';
import TodoContainer from './components/todo/todo-container';
import todosReducer from './components/todo/reducers/main';

class App extends Component {
    constructor(props) {
        super(props);

        /* Own store from scratch */
        // this.store = createOwnStore(counterReducer);

        /* Redux store */
        // const store = createStore(counterReducer);
        this.store = createStore(todosReducer);
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <Provider store={this.store}>
                    {/*<CounterContainer />*/}
                    <TodoContainer />
                </Provider>
            </div>
        );
    }
}

export default App;
