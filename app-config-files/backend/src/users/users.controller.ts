import { 
  IUsers, 
  LoginReturn, 
  LogoutReturn, 
  UserLogin 
} from './dto/user.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) { }

  @Get()
  getAll(): Promise<IUsers[]> {
    return this.usersService.getAll();
  }

  @Post('/create')
  async create(
    @Body() createUserDto: IUsers,
  ): Promise<LoginReturn> {
    return await this.usersService.create(createUserDto);
  }

  @Post('/login')
  async login(
    @Body() body: UserLogin,
  ): Promise<LoginReturn> {
    return await this.authService.login(body);
  }

  @Post('/logout')
  async logout(
    @Body() body: {numero_usuario: string},
  ): Promise<LogoutReturn> {
    return await this.authService.logout(body.numero_usuario);
  }
}
