import { Body, Controller, Get, Post } from "@nestjs/common";
import { get } from "http";
import { Sequelize } from "sequelize-typescript";
import { User } from "src/models/user.model";
import { UserService } from "./user.service";

type userBody = {name:string, score:string, age:string}

@Controller('user')
export class UserController {
  constructor(private readonly userService:UserService){ }

  users: any[]=[];

  @Get('/users')
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get('/signin')
  signinUser(@Body() body: userBody): any {
    return this.userService.signinUser(body)
    
  }

  @Post('/create')
  createUser(@Body() body: userBody){
    this.userService.createUser(body)
    return {message: "Burtgegdlee", body}
  }

}