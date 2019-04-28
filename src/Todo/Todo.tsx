import React, { FormEvent } from 'react';

import s from './Todo.module.scss';

import { inject, observer} from 'mobx-react';

import { ITodos } from './store/Todos'
import { ITask } from './store/Task';

export interface TodoProps {
  
}

export interface TodoWithStore extends TodoProps {
  store: ITodos
}
 
export interface TodoState {
  isOpen: boolean;
}

class Todo extends React.Component<TodoProps, TodoState> {
  state = { isOpen: true };
  nameRef: any;
  descriptionRef: any;
  render() {
    console.log((this.props as TodoWithStore).store);
    return (
      <div className={s.todosContainer}>
        Todos container
        <form onSubmit={this.submitForm.bind(this)}>
          <input ref={input => this.nameRef = input} name="name" />
          <input ref={input => this.descriptionRef = input} name="description"/>
          <button type="submit">Submit</button>
        </form>
        {(this.props as TodoWithStore).store.list.map((item, index) => (
          <div key={index}>
            <span>{item.name}</span>
            <span>{item.status()}</span>
            <button type="button" onClick={() => {item.markAsDone()}}>done</button>
          </div>
        ))}
      </div>
    );
  }

  submitForm(event: FormEvent) {
    event.preventDefault();
    const task ={
      name: this.nameRef.value,
      description: this.descriptionRef.value,
    };
    (this.props as TodoWithStore).store.add(task as any);
  }
}
 
export default inject('store')(observer(Todo));