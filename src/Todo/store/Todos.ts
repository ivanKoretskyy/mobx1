import { types, Instance } from 'mobx-state-tree';
import { Task, ITask } from './Task';

export const Todos = types.model('Todos', {
  list: types.array(Task),
}).actions(self => ({
  add: (task: ITask) => {
    self.list.push(task);
  }
}))

export type ITodos = Instance<typeof Todos>;