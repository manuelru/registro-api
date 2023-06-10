import { PartialType } from '@nestjs/mapped-types';
import { CreateBirthDto } from './create-birth.dto';

export class UpdateBirthDto extends PartialType(CreateBirthDto) {
    name: string;
    dateBirth: Date;
    color:string;
    sexo:string
    dateDestete:Date;
}
