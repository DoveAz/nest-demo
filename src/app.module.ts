import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CatsModule } from './CatsModule/cats.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://doveaz:qw1234@doveaz.xyz:17017/nest', {
      useNewUrlParser: true,
    }),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
