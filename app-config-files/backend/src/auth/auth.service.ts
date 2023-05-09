import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { JwtService } from '@nestjs/jwt';
import { Users } from "../users/entities/users.entity";
import { Repository } from "typeorm";
import { compare } from 'bcrypt';
import { LoginReturn, UserLogin } from "src/users/dto/user.dto";

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private jwtService: JwtService
  ) { };

  async login(data: UserLogin): Promise<LoginReturn> {

    const { numero_usuario, senha } = data;

    const user = await this.usersRepository.findOne({
      where: { numero_usuario: numero_usuario },
      select: ['id', 'numero_usuario', 'senha']
    });

    if (!user)
      throw new HttpException({
        msg: "Invalid credentials",
        error: "Bad Request"
      }, HttpStatus.BAD_REQUEST);

    if (await this.comparePassword(senha, user.senha)) {
      user.estado_login = true;
      const token = this.jwtSign({
        id: user.id,
        numero_usuario: user.numero_usuario,
        estado_login: true
      });

      this.usersRepository.save(user);
      return {
        token,
        id: user.id,
        numero_usuario: user.numero_usuario,
        estado_login: true
      };
    }

    throw new HttpException({
      msg: "Invalid credentials",
      error: "Bad Request"
    }, HttpStatus.BAD_REQUEST);
  }

  async logout(numero_usuario: string) {
    let user = await this.usersRepository.findOne({
      where: {
        numero_usuario
      }
    });

    if(user) {
      user.estado_login = false;
      await this.usersRepository.save(user);

      return {
        message: "Deslogado com sucesso",
        numero_usuario
      }
    }

    throw new HttpException({
      msg: "No user was found",
      error: "Not Found"
    }, HttpStatus.NOT_FOUND);
  }

  async comparePassword(attempt: string, pwd: string): Promise<boolean> {
    return await compare(attempt, pwd);
  }

  jwtSign(payload: LoginReturn): string {
    return this.jwtService.sign(payload);
  }

  async validateJwt(token: string): Promise<boolean> {
    try {
      await this.jwtService.verify(token.split(" ")[1]);

      return true;
    } catch (err) {
      return false;
    }
  }
}