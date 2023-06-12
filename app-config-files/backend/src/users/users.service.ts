import {
  HttpException,
  HttpStatus,
  Injectable
} from '@nestjs/common';
import { Users } from './entities/users.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, DeepPartial } from "typeorm";
import { IUsers, LoginReturn } from './dto/user.dto';
import { AuthService } from 'src/auth/auth.service';
import { hashSync } from "bcrypt";
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    private readonly authService: AuthService
  ) { }

  async getAll(): Promise<IUsers[]> {
    let users = await this.usersRepository.find();

    if (users.length) return users;

    throw new HttpException({
      msg: "No User was found",
      error: "Not found"
    },
      HttpStatus.NOT_FOUND);
  }

  async create(body: IUsers): Promise<LoginReturn> {
    const { numero_usuario } = body;

    let user = await this.usersRepository.findOne({
      where: {
        numero_usuario: numero_usuario
      }
    });

    if (!user) {
      body.senha = hashSync(body.senha, 10);
      body.estado_login = true;
      let newUser = await this.usersRepository.save(
        this.usersRepository.create(body as DeepPartial<Users>)
      );

      return {
        token: this.authService.jwtSign({
          id: newUser.id,
          numero_usuario: newUser.numero_usuario,
          estado_login: true
        }),
        id: newUser.id,
        numero_usuario: newUser.numero_usuario,
        estado_login: true
      };
    };

    throw new HttpException({
      msg: "User already exists",
      error: "Not acceptable"
    }, HttpStatus.NOT_ACCEPTABLE);
  }
}
