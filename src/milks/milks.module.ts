import { Module } from '@nestjs/common';
import { MilksService } from './milks.service';
import { MilksController } from './milks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Milk } from './entities/milk.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Milk])],
  controllers: [MilksController],
  providers: [MilksService]
})
export class MilksModule {}
