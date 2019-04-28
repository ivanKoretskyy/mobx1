import { types, Instance } from 'mobx-state-tree';

export const Task = types.model('Task', {
  name: types.string,
  description: types.string,
  isDone: false,
}).actions(self => ({
  markAsDone: () => {
    self.isDone = true
  }
})).views(self => ({
  status: () => self.isDone ? 'Done' : 'In Progress',
}));

export type ITask = Instance<typeof Task>;

