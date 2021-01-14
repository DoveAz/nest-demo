import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({
    description: '用户名',
  })
  readonly username: string
  @ApiProperty({
    description: '昵称',
  })
  readonly nickname: string
  @ApiProperty({
    description: '密码',
    required: false,
  })
  readonly password: string
  @ApiProperty({
    description: '邮箱',
    required: true,
  })
  readonly email: string
}
