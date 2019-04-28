import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import './App.css';
import Todo from './Todo/Todo';
import { Todos } from './Todo/store/Todos';

const store = Todos.create({});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Todo/>
        </div>
      </Provider>
    );
  }
}

export default App;
