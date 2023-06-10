import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MilksService } from './milks.service';
import { CreateMilkDto } from './dto/create-milk.dto';
import { UpdateMilkDto } from './dto/update-milk.dto';

@Controller('milks')
export class MilksController {
  constructor(private readonly milksService: MilksService) {}

  @Post()
  create(@Body() createMilkDto: CreateMilkDto) {
    return this.milksService.create(createMilkDto);
  }

  @Get()
  findAll() {
    return this.milksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.milksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMilkDto: UpdateMilkDto) {
    return this.milksService.update(id, updateMilkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.milksService.remove(id);
  }
}
