import { Injectable, Inject } from '@nestjs/common';
import { Todo } from 'src/entity/Todo.entity';
import { Repository } from 'typeorm';

export interface TodoInterface {
  name: string;
  complete: boolean;
}

@Injectable()
export class TodosService {
  constructor(
    @Inject('TODO_REPOSITORY')
    private todoRepository: Repository<TodoInterface>,
  ) {}

  create(todo: TodoInterface): Promise<TodoInterface> {
    return this.todoRepository.save(this.todoRepository.create(todo));
  }

  findAll(): Promise<TodoInterface[]> {
    return this.todoRepository.find();
  }

  update(id: string, data: any): Promise<any> {
    return this.todoRepository
      .createQueryBuilder()
      .update()
      .set({
        name: data.name,
      })
      .where('id = :id', { id })
      .execute();
  }

  delete(id: string): Promise<any> {
    return this.todoRepository
      .createQueryBuilder()
      .delete()
      .from(Todo)
      .where('id = :id', { id })
      .execute();
  }
}
