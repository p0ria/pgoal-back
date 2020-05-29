import {Injectable} from "@nestjs/common";
import {UserService} from "./user.service";
import {JwtService} from "@nestjs/jwt";
import {toUserResponse} from "../schemas/converters/user-converter";
import {UserResponse} from "../schemas/responses/user-response";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService){}

    async validateUser(username: string, password: string): Promise<UserResponse | null> {
        const user = await this.userService.findByUsername(username);
        if(user && user.password === password) {
            return toUserResponse(user);
        }
        return null;
    }

    async login(user: any) {
        const payload = {
            username: user.username
        };
        return {
            access_token: this.jwtService.sign(payload)
        };
    }
}