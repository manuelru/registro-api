import { Injectable } from '@nestjs/common';
import { CreateMilkDto } from './dto/create-milk.dto';
import { UpdateMilkDto } from './dto/update-milk.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Milk } from './entities/milk.entity';

@Injectable()
export class MilksService {
    constructor(
    @InjectRepository(Milk)
    private milkRepository: Repository<Milk>,
  ) { }

  async create(createMilkDto: CreateMilkDto) {
    await this.milkRepository.save(createMilkDto);
  }

  findAll() {
    return this.milkRepository.find();
  }

  findOne(id: string) {
    return this.milkRepository.findOne({ where: {id}});
  }

  async update(id: string, updateMilkDto: UpdateMilkDto) {
    const updatedMilk = await this.milkRepository.update(id, updateMilkDto);
    return updatedMilk;
  }

  remove(id: string) {
    this.milkRepository.delete(id);
  }
}
