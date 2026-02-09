import { IsIn, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class UpdateTaskDto {
  @IsInt()
  id: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  @Min(0)
  @IsIn([0, 1, 2])
  status: number;
}
