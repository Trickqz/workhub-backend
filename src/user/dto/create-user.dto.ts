import { IsEmail, IsNotEmpty, IsEnum } from 'class-validator';
import { UserRole } from '../user-role.enum';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsEnum(UserRole)
  role: UserRole;
} 