import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { ApiProperty } from '@nestjs/swagger'

export type UserDocument = User & Document

@Schema()
export class User extends Document {
  @Prop()
  username: string

  @Prop()
  nickname: string

  @ApiProperty({
    description: 'The age of a cat',
    minimum: 1,
    default: 1,
  })
  @Prop()
  age: number

  @Prop()
  password: string

  @Prop()
  email: string
}

export const UserSchema = SchemaFactory.createForClass(User)
