import {Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {Plan} from "./plan.entity";

@Entity({name: 'Users'})
export class User {
    @PrimaryColumn()
    username: string;
    
    @Column()
    password: string;
    
    @OneToMany(type => Plan, plan => plan.user)
    plans: Plan[];
}