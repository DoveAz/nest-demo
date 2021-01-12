import { Injectable } from '@nestjs/common'
import { UsersService } from '../UsersModule/users.service'
import { omit } from 'lodash'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username)
    if (user && user.password === password) {
      return omit(user.toObject(), ['password'])
    } else {
      return null
    }
  }

  async login({ username, _id }: { username: string; _id: string }) {
    const payload = { username: username, sub: _id }
    return {
      accessToken: this.jwtService.sign(payload),
    }
  }
}
