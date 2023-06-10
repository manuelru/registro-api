import { IsOptional } from "class-validator";
import { type } from "os";
import { Binary, Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class Birth {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 20 })
    name: string;

    @Column()
    dateBirth: Date;

    @Column()
    color: string;

    @Column()
    sexo: string

    @Column({nullable:true, type:Date})
    @IsOptional(null)
    dateDestete: Date;
    
}
