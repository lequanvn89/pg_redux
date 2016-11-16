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

        /* Redux store */
        // const store = createStore(counterReducer);
        const store = createStore(todosReducer);

        /* Own store from scratch */
        // const store = createOwnStore(counterReducer);

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
                <Provider store={this.store}>
                    {/*<CounterContainer />*/}
                    <TodoContainer />
                </Provider>
            </div>
        );
    }
}

export default App;
