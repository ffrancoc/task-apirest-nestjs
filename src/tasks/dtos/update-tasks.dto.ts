import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UpdateTaskDto } from './update-task.dto';

export class UpdateTasksDto {
  @ValidateNested({ each: true })
  @Type(() => UpdateTaskDto)
  tasks: UpdateTaskDto[];
}
