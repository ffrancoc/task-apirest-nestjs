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
import { RemoveTasksDto } from './dtos/remove-tasks.dto';
import { UpdateTasksDto } from './dtos/update-tasks.dto';

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

  @Put()
  updateTasks(@Body() dtos: UpdateTasksDto) {
    return this.taskService.updateMany(dtos.tasks);
  }

  @Put(':id')
  updateTask(
    @Body() dto: CreateTaskDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.taskService.update(dto, id);
  }

  @Delete()
  RemoveTasks(@Body() dto: RemoveTasksDto) {
    return this.taskService.removeMany(dto.ids);
  }

  @Delete(':id')
  removeTask(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.remove(id);
  }
}
