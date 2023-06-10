import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Milk {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type:"decimal" })
    quantity:number ;

    @Column({type:"decimal"})
    price: number;

    @Column()
    date: Date;

    
}
