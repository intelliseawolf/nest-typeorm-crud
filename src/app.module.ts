import { Module } from '@nestjs/common';
import { TodosModule } from './module/todo.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
