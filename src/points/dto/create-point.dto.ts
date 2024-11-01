import { IsDateString, IsNotEmpty } from 'class-validator';

export class CreatePointDto {
  @IsNotEmpty()
  userId: number;

  @IsDateString()
  entry: string;

  @IsDateString()
  exit?: string;
} 