import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findByEmail(email);
    console.log('User found:', user);
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      console.log('Is password valid:', isPasswordValid);
      if (isPasswordValid) {
        return user;
      }
    }
    return null;
  }

  async login(user: User) {
    const payload = { email: user.email, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
} 