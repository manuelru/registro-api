import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BirthsModule } from './births/births.module';
import { MilksModule } from './milks/milks.module';
import { SuppliesModule } from './supplies/supplies.module';
import { WorkersModule } from './workers/workers.module';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'CMrrjmrr09.',
      database: 'db-observatorio',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
  
    BirthsModule,
    MilksModule,
    SuppliesModule,
    WorkersModule,
    SalesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
