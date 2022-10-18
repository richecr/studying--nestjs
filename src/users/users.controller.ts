import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAll(): Promise<User[]> {
    const result = await this.usersService.findAll();
    return result;
  }

  @Post()
  async create(@Body() user: CreateUserDto): Promise<User> {
    const result = await this.usersService.create(user);
    return result;
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() user: CreateUserDto,
  ): Promise<User> {
    const result = await this.usersService.update(id, user);
    return result;
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ msg: string }> {
    await this.usersService.remove(id);
    return { msg: 'SUCCESS' };
  }
}
