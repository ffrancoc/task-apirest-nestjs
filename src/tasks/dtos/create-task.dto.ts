import { Type } from 'class-transformer';
import {
  IsDate,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsString,
  Min,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  @Min(0)
  @IsIn([0, 1, 2])
  status: number;
}
