import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleDto } from './create-sale.dto';

export class UpdateSaleDto extends PartialType(CreateSaleDto) {

    name: string;
    earring: string;
    weight: number;
    subtraction: number;
    price:number;
    date: Date;

}
