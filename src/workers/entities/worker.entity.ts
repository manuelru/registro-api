import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Worker {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ length: 20 })
    name: string;

    @Column({type:"decimal"})
    hoursworks: number;

    @Column()
    pricehours: number;

    @Column()
    date: Date;

}
