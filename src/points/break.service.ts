import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateBreakDto } from './dto/create-break.dto';

@Injectable()
export class BreakService {
  constructor(private prisma: PrismaService) {}

  async create(pointId: number, createBreakDto: CreateBreakDto) {
    return this.prisma.break.create({
      data: {
        ...createBreakDto,
        pointId,
      },
    });
  }

  async findAll(pointId: number) {
    return this.prisma.break.findMany({
      where: { pointId },
    });
  }

  async findOne(pointId: number, breakId: number) {
    const breakRecord = await this.prisma.break.findUnique({
      where: { id: breakId },
    });
    if (!breakRecord || breakRecord.pointId !== pointId) {
      throw new NotFoundException(`Pausa com ID ${breakId} não encontrada para o ponto ${pointId}`);
    }
    return breakRecord;
  }

  async update(pointId: number, breakId: number, updateBreakDto: CreateBreakDto) {
    const breakRecord = await this.prisma.break.findUnique({
      where: { id: breakId },
    });
    if (!breakRecord || breakRecord.pointId !== pointId) {
      throw new NotFoundException(`Pausa com ID ${breakId} não encontrada para o ponto ${pointId}`);
    }
    return this.prisma.break.update({
      where: { id: breakId },
      data: updateBreakDto,
    });
  }

  async remove(pointId: number, breakId: number) {
    const breakRecord = await this.prisma.break.findUnique({
      where: { id: breakId },
    });
    if (!breakRecord || breakRecord.pointId !== pointId) {
      throw new NotFoundException(`Pausa com ID ${breakId} não encontrada para o ponto ${pointId}`);
    }
    return this.prisma.break.delete({
      where: { id: breakId },
    });
  }
} 