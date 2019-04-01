import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get('/add')
  add(): Promise<User> {
    return this.UserService.add();
  }
}
