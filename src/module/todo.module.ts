import { Module } from '@nestjs/common';

import { DatabaseModule } from './database.module';
import { TodosController } from '../controller/todo.controller';
import { TodosService } from '../provider/todo.service';
import { TodosProvider } from 'src/provider/todo.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [TodosController],
  providers: [TodosService, ...TodosProvider],
})
export class TodosModule {}
