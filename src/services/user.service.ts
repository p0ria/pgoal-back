import { Injectable } from '@nestjs/common';
import {User} from "../schemas/entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>){}
    
    async findByUsername(username: string): Promise<User | undefined> {
        return this.userRepository.findOne({
            where: {username: username}
        });
    }
}
