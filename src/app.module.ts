import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PointModule } from './points/point.module';

@Module({
  imports: [AuthModule, UserModule, PointModule],
})
export class AppModule {}
