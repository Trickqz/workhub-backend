import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findByEmail(email);
    if (user && user.password === password) {
      return user;
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