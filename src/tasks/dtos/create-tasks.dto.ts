import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CreateTaskDto } from './create-task.dto';

export class CreateTasksDto {
  @ValidateNested({ each: true })
  @Type(() => CreateTaskDto)
  tasks: CreateTaskDto[];
}
