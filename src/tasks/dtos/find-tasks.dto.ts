import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class FindTasksDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  id?: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  status?: number;
}
