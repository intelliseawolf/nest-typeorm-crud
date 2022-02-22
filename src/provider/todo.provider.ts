import { DataSource } from 'typeorm';
import { Todo } from '../entity/Todo.entity';

export const TodosProvider = [
  {
    provide: 'TODO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Todo),
    inject: ['DATA_SOURCE'],
  },
];
