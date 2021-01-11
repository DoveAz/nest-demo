import { Body, Controller, Get, Post } from '@nestjs/common'
import { AppService } from './app.service'

interface User {
  name: string
  age: number
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
  @Post('bla')
  te(@Body() user: User): User {
    console.log(user)
    return user
  }
}
