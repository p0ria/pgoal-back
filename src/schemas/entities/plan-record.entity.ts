import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Plan} from "./plan.entity";

@Entity({name: 'PlanRecords'})
export class PlanRecord {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    date: number;
    
    @Column()
    duration: number;

    @ManyToOne(type => Plan, plan => plan.records)
    plan: Plan;
}