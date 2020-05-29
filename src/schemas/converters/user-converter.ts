import {User} from "../entities/user.entity";
import {UserRequest} from "../requests/user-request";
import {UserResponse} from "../responses/user-response";

export function fromUserRequest(userRequest: UserRequest): User {
    return {
        username: userRequest.username,
        password: userRequest.password,
        plans: null
    };
}

export function toUserResponse(user: User): UserResponse {
    return {
        username: user.username
    };
}