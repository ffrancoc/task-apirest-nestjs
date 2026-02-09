import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, IsInt } from 'class-validator';

export class RemoveTasksDto {
  @IsArray()
  @ArrayNotEmpty()
  @Type(() => Number)
  @IsInt({ each: true })
  ids: number[];
}
