import { User } from "src/models/user.model";
import { UserService } from "./user.service";
declare type userBody = {
    name: string;
    score: string;
    age: string;
};
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    users: any[];
    getUsers(): Promise<User[]>;
    signinUser(body: userBody): any;
    createUser(body: userBody): {
        message: string;
        body: userBody;
    };
}
export {};
