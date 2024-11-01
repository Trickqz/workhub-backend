import { Module } from '@nestjs/common';
import { PointController } from './point.controller';
import { PointService } from './point.service';
import { BreakController } from './break.controller';
import { BreakService } from './break.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [PointController, BreakController],
  providers: [PointService, BreakService, PrismaService],
})
export class PointModule {} 