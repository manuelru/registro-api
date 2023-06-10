import { Module } from '@nestjs/common';
import { BirthsService } from './births.service';
import { BirthsController } from './births.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Birth } from './entities/birth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Birth])],
  controllers: [BirthsController],
  providers: [BirthsService]
})
export class BirthsModule {}
