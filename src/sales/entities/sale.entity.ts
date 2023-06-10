import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sale {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 20 })
    name: string;

    @Column()
    earring: string;

    @Column()
    weight: number;

    @Column({nullable:true})
    subtraction: number;

    @Column()
    price:number;

    @Column()
    date: Date;


}
