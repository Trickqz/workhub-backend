import { IsDateString, IsNotEmpty } from 'class-validator';

export class CreateBreakDto {
  @IsNotEmpty()
  @IsDateString()
  start: string;

  @IsNotEmpty()
  @IsDateString()
  end: string;
} 