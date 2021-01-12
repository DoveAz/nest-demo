import { Controller, Request, Post, UseGuards } from '@nestjs/common'
import { AppService } from './app.service'
import { AuthService } from './auth/auth.service'
import { Public } from './decorator'
import { AuthGuard } from '@nestjs/passport'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}
  @Public()
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user)
  }
}
