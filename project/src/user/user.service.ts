import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/models/user.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel:typeof User){userModel.sync()}

  getUsers(): Promise<User[]> {
    return this.userModel.findAll();
  }

  signinUser(data){
    const user = this.userModel.findOne({
      where: { name:data.name, password:data.password }
    })
    return user
  }

  createUser(data){
    const newUser = new this.userModel({
      id:data.id,
      name:data.name,
      password:data.password,
      score:data.score,
      age:data.age
    })
    newUser.save()
    return newUser
  }
}
