import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './schemas/user.schema'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    await this.usersService.create(createUserDto)
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Put(':id')
  async updateById(@Param() params, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return await this.usersService.updateById(params.id, updateUserDto)
  }
}
