import { PartialType } from '@nestjs/mapped-types';
import { CreateSupplyDto } from './create-supply.dto';

export class UpdateSupplyDto extends PartialType(CreateSupplyDto) {
    quantity: number;
    price: number;
    description:string;
    date:Date;

}
