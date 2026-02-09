import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { CreateTasksDto } from './dtos/create-tasks.dto';
import { FindTasksDto } from './dtos/find-tasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  findAllTasks() {
    return this.taskService.findAll();
  }
  @Get('/filter')
  findTasksByFilters(@Query() filters: FindTasksDto) {
    return this.taskService.findByFilters(filters);
  }

  @Get(':id')
  findOneTask(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.findOne(id);
  }

  @Post()
  createTask(@Body() dto: CreateTaskDto) {
    return this.taskService.create(dto);
  }

  @Post('/bulk')
  createTasks(@Body() dtos: CreateTasksDto) {
    return this.taskService.createMany(dtos.tasks);
  }

  @Put(':id')
  updateTask(
    @Body() dto: CreateTaskDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.taskService.update(dto, id);
  }

  @Delete(':id')
  removeTask(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.remove(id);
  }
}
