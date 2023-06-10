import { Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Worker } from './entities/worker.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WorkersService {
  
  constructor(
    @InjectRepository(Worker)
    private workersRepository: Repository<Worker>,
    ) { }
  async create(createWorkerDto: CreateWorkerDto) {
    await this.workersRepository.save(createWorkerDto);
  }

  findAll() {
    return  this.workersRepository.find();
  }

  findOne(id: string) {
    return this.workersRepository.findOne({ where: {id}});
  }

  async update(id: string, updateWorkerDto: UpdateWorkerDto) {
    const updatedWorkers= await this.workersRepository.update(id, updateWorkerDto);
    return updatedWorkers;
  }

  remove(id: string) {
    this.workersRepository.delete(id);
  }
}
