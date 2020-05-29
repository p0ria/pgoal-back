import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PlanRecord} from "./plan-record.entity";
import {User} from "./user.entity";

@Entity({name: 'Plans'})
export class Plan {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    color: string;
    
    @Column()
    startDate: number;
    
    @Column()
    endDate: number;
    
    @Column()
    executionPlan: string;
    
    @ManyToOne(type => User, user => user.plans)
    user: User;
    
    @OneToMany(type => PlanRecord, record => record.plan)
    records: PlanRecord[];
    
}