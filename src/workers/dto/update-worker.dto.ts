import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkerDto } from './create-worker.dto';

export class UpdateWorkerDto extends PartialType(CreateWorkerDto) {
    name: string;
    hoursworks: number;
    pricehours: number;
    date: Date;
}
