import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    first_name : string;

    @Column()
    last_name : string;

    @Column()
    password : string;
}