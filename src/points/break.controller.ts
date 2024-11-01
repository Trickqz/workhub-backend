import { Controller, Post, Get, Body, Param, Put, Delete } from '@nestjs/common';
import { BreakService } from './break.service';
import { CreateBreakDto } from './dto/create-break.dto';

@Controller('points/:pointId/breaks')
export class BreakController {
  constructor(private readonly breakService: BreakService) {}

  @Post()
  async create(@Param('pointId') pointId: string, @Body() createBreakDto: CreateBreakDto) {
    return this.breakService.create(+pointId, createBreakDto);
  }

  @Get()
  async findAll(@Param('pointId') pointId: string) {
    return this.breakService.findAll(+pointId);
  }

  @Get(':breakId')
  async findOne(@Param('pointId') pointId: string, @Param('breakId') breakId: string) {
    return this.breakService.findOne(+pointId, +breakId);
  }

  @Put(':breakId')
  async update(@Param('pointId') pointId: string, @Param('breakId') breakId: string, @Body() updateBreakDto: CreateBreakDto) {
    return this.breakService.update(+pointId, +breakId, updateBreakDto);
  }

  @Delete(':breakId')
  async remove(@Param('pointId') pointId: string, @Param('breakId') breakId: string) {
    return this.breakService.remove(+pointId, +breakId);
  }
}
