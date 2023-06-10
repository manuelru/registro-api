import { Injectable } from '@nestjs/common';
import { CreateBirthDto } from './dto/create-birth.dto';
import { UpdateBirthDto } from './dto/update-birth.dto';
import { Birth } from './entities/birth.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BirthsService {

  constructor(
    @InjectRepository(Birth)
    private birthRepository: Repository<Birth>,
  ) { }


  async create(createBirthDto: CreateBirthDto) {
    if (createBirthDto.dateDestete=null) {
      createBirthDto.dateDestete= null
    }
    await this.birthRepository.save(createBirthDto);
  }

  findAll() {
    return this.birthRepository.find();
  }

  findOne(id: string) {
    return this.birthRepository.findOne({ where: {id}});
  }

 async update(id: string, updateBirthDto: UpdateBirthDto) {
    const updatedProduct = await this.birthRepository.update(id, updateBirthDto);
    return updatedProduct;
  }

  remove(id: string) {
    this.birthRepository.delete(id);
  }
}
