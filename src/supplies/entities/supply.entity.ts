import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Supply {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    quantity: number;

    @Column()
    price: number;

    @Column()
    description: string;

    @Column()
    date: Date;





}
