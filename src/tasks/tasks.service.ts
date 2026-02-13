import { Injectable, NotFoundException } from '@nestjs/common';
import { ITask } from './task.interface';
import { CreateTaskDto } from './dtos/create-task.dto';
import { FindTasksDto } from './dtos/find-tasks.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async findAll() {
    const tasks = await this.taskRepository.find();
    return tasks;
  }

  async findOne(id: number) {
    const foundTask = await this.taskRepository.findOneBy({ id: id });
    if (!foundTask) {
      throw new NotFoundException('Task not found');
    }

    return foundTask;
  }

  async findByFilters(filters: FindTasksDto) {
    const where: any = {};

    if (filters.id) {
      where.id = filters.id;
    }

    if (filters.description) {
      where.description = filters.description;
    }

    if (filters.status) {
      where.status = filters.status;
    }

    const tasks = await this.taskRepository.find({ where });
    return tasks;
  }

  async create(dto: CreateTaskDto) {
    const taskObj = this.taskRepository.create({
      ...dto,
    });

    const task = this.taskRepository.save(taskObj);
    return task;
  }

  async createMany(dtos: CreateTaskDto[]) {
    const taskObjs = this.taskRepository.create(dtos);
    const tasks = await this.taskRepository.save(taskObjs);
    return tasks;
  }

  async update(dto: CreateTaskDto, id: number) {
    const foundTask = await this.taskRepository.findOneBy({ id: id });

    if (!foundTask) {
      throw new NotFoundException('Task not found');
    }

    const updateTask = await this.taskRepository.update(id, {
      ...dto,
      updatedAt: new Date(),
    });

    const updatedTask = await this.taskRepository.findOneBy({ id });

    return updatedTask;
  }

  async updateMany(tasks: UpdateTaskDto[]) {
    const updatedTasks: Task[] = [];

    for (const updateDto of tasks) {
      const foundTask = await this.taskRepository.findOneBy({
        id: updateDto.id,
      });

      if (foundTask) {
        const mergedTask = this.taskRepository.merge(foundTask, {
          ...updateDto,
          updatedAt: new Date(),
        });

        const savedTask = await this.taskRepository.save(mergedTask);
        updatedTasks.push(savedTask);
      }
    }

    return updatedTasks;
  }

  async remove(id: number) {
    const foundTask = await this.taskRepository.findOneBy({ id });

    if (!foundTask) {
      throw new NotFoundException('Task not found');
    }

    await this.taskRepository.delete({ id });

    return foundTask;
  }

  async removeMany(ids: number[]) {
    const tasks = await this.taskRepository.findBy({ id: In(ids) });

    if (!tasks.length) {
      throw new NotFoundException('No tasks found');
    }

    await this.taskRepository.delete(ids);

    return tasks;
  }
}
