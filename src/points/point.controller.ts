import { Controller, Post, Get, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { PointService } from './point.service';
import { CreatePointDto } from './dto/create-point.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('points')
export class PointController {
  constructor(private readonly pointService: PointService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createPointDto: CreatePointDto) {
    return this.pointService.create(createPointDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.pointService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.pointService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePointDto: CreatePointDto) {
    return this.pointService.update(+id, updatePointDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.pointService.remove(+id);
  }
}
