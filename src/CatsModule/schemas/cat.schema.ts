import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { ApiProperty } from '@nestjs/swagger'

export type CatDocument = Cat & Document

@Schema()
export class Cat extends Document {
  @Prop()
  name: string

  @ApiProperty({
    description: 'The age of a cat 啊哈哈',
    minimum: 1,
    default: 1,
  })
  @Prop()
  age: number

  @Prop()
  breed: string
}

export const CatSchema = SchemaFactory.createForClass(Cat)
