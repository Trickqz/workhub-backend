import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePointDto } from './dto/create-point.dto';

@Injectable()
export class PointService {
  constructor(private prisma: PrismaService) {}

  async create(createPointDto: CreatePointDto) {
    return this.prisma.point.create({
      data: createPointDto,
    });
  }

  async findAll() {
    return this.prisma.point.findMany();
  }

  async findOne(id: number) {
    const point = await this.prisma.point.findUnique({
      where: { id },
    });
    if (!point) {
      throw new NotFoundException(`Registro de ponto com ID ${id} não encontrado`);
    }
    return point;
  }

  async update(id: number, updatePointDto: CreatePointDto) {
    const point = await this.prisma.point.findUnique({
      where: { id },
    });
    if (!point) {
      throw new NotFoundException(`Registro de ponto com ID ${id} não encontrado`);
    }
    return this.prisma.point.update({
      where: { id },
      data: updatePointDto,
    });
  }

  async remove(id: number) {
    const point = await this.prisma.point.findUnique({
      where: { id },
    });
    if (!point) {
      throw new NotFoundException(`Registro de ponto com ID ${id} não encontrado`);
    }
    return this.prisma.point.delete({
      where: { id },
    });
  }
} 