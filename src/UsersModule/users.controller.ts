import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './schemas/user.schema'
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('用户管理')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    summary: '创建用户',
  })
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    await this.usersService.create(createUserDto)
  }

  @ApiOperation({
    summary: '查找所有用户',
  })
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @ApiOperation({
    summary: '编辑用户',
  })
  @Put(':id')
  async updateById(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return await this.usersService.updateById(id, updateUserDto)
  }
}
