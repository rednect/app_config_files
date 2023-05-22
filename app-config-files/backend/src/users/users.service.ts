import { User } from './entities/users.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository, DeepPartial } from "typeorm";

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    let users = await this.userRepository.find({});
    return users
  }

  async create(email: string, body: any) {
    let users = await this.userRepository.findOne({where: {email: body.email}})
    if (users) {
      throw new HttpException('Usuário já cadastrado', 406)
    } else {
      await this.userRepository.save(this.userRepository.create(body as DeepPartial<User>));
    }
  }

  async getByEmail(email: string) {
    return await this.userRepository.findOne({where: {email: email}});
  }

}