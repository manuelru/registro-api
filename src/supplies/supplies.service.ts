import { Injectable } from '@nestjs/common';
import { CreateSupplyDto } from './dto/create-supply.dto';
import { UpdateSupplyDto } from './dto/update-supply.dto';
import { Supply } from './entities/supply.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SuppliesService {

  constructor(
    @InjectRepository(Supply)
    private suppliesRepository: Repository<Supply>,
  ) { }

  async create(createSupplyDto: CreateSupplyDto) {
    await this.suppliesRepository.save(createSupplyDto);
  }

  findAll() {
    return this.suppliesRepository.find();
  }

  findOne(id: string) {
    return this.suppliesRepository.findOne({ where: {id}});
  }

  async update(id: string, updateSupplyDto: UpdateSupplyDto) {
    const updatedSupplies = await this.suppliesRepository.update(id, updateSupplyDto);
    return updatedSupplies;
  }

  remove(id: string) {
    this.suppliesRepository.delete(id);
  }
}
