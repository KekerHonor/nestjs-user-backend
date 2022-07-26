import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '13.215.139.119',
      port: 3306,
      username: 'rtd',
      password: 'Tiny722$',
      database: 'tulga',
      models: [User],
    }),
    SequelizeModule.forFeature([User])
  ],

  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
