import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
async function role(req, res, next) {
  await next()
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')
  app.use(role)
  await app.listen(3000)
}
bootstrap()
