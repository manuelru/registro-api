import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from './entities/sale.entity';

@Injectable()
export class SalesService {
  
  constructor(
    @InjectRepository(Sale)
    private saleRepository: Repository<Sale>,
  ) { }

  async create(createSaleDto: CreateSaleDto) {
    if (createSaleDto.subtraction=null) {
      createSaleDto.subtraction= 0
    }
    await this.saleRepository.save(createSaleDto);
  }


  findAll() {
    return this.saleRepository.find();
  }

  findOne(id: string) {
    return this.saleRepository.findOne({ where: {id}});
  }

  async update(id: string, updateSaleDto: UpdateSaleDto) {
    if (updateSaleDto.subtraction=null) {
      updateSaleDto.subtraction= 0
    }
    const updateSale = await this.saleRepository.update(id, updateSaleDto);
    return updateSale;
  }


  remove(id: string) {
    this.saleRepository.delete(id);
  }
}

