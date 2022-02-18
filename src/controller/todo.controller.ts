import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { TodoInterface, TodosService } from 'src/provider/todo.service';

interface CreateTodoDto {
  name: string;
  complete: boolean;
}

@Controller('todo')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    const todo = await this.todosService.create(createTodoDto);

    if (!todo) {
      return 'error in creating todo';
    }
    return 'todo created successfully';
  }

  @Get()
  async findAll(@Req() request: Request) {
    const todos: TodoInterface[] = await this.todosService.findAll();
    return todos;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const newTodo: any = await this.todosService.update(id, body);
    return 'todo updated';
  }

  @Delete('id')
  async remove(@Param('id') id: string) {
    await this.todosService.delete(id);
    return 'todo deleted';
  }
}
