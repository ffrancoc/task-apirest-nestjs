import { Injectable, NotFoundException } from '@nestjs/common';
import { ITask } from './task.interface';
import { CreateTaskDto } from './dtos/create-task.dto';
import { FindTasksDto } from './dtos/find-tasks.dto';

@Injectable()
export class TasksService {
  private taskList: ITask[] = [];

  findAll() {
    return this.taskList;
  }

  findOne(id: number) {
    const foundTask = this.taskList.find((t) => t.id === id);
    if (!foundTask) {
      return new NotFoundException('Task not found');
    }

    return foundTask;
  }

  findByFilters(filters: FindTasksDto) {
    return this.taskList.filter((task, index) => {
      let matches = true;

      if (filters.id) {
        matches = matches && task.id === filters.id;
      }

      if (filters.description) {
        matches = matches && task.description === filters.description;
      }

      if (filters.status) {
        matches = matches && task.status === filters.status;
      }

      return matches;
    });
  }

  create(dto: CreateTaskDto) {
    const task: ITask = {
      ...dto,
      id: this.taskList.length + 1,
      createdAt: new Date(),
    };

    this.taskList.push(task);
    return task;
  }

  createMany(dtos: CreateTaskDto[]) {
    const newTasks = dtos.map((dto, index) => ({
      id: this.taskList.length + index + 1,
      ...dto,
      createdAt: new Date(),
    }));

    this.taskList.push(...newTasks);
    return newTasks;
  }

  update(dto: CreateTaskDto, id: number) {
    const foundIndex = this.taskList.findIndex((t) => t.id === id);

    if (foundIndex === -1) {
      return new NotFoundException('Task not Found');
    }

    const updatedTask: ITask = {
      ...this.taskList[foundIndex],
      ...dto,
      id,
      updatedAt: new Date(),
    };

    this.taskList[foundIndex] = updatedTask;
    return updatedTask;
  }

  remove(id: number) {
    const foundTask = this.taskList.find((t) => t.id === id);
    if (!foundTask) {
      return new NotFoundException('Task not found');
    }

    this.taskList = this.taskList.filter((t) => t.id !== id);
    return foundTask;
  }
}
