import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PointModule } from './points/point.module';

@Module({
  imports: [UserModule, PointModule],
})
export class AppModule {}
