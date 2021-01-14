import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { CatsService } from './cats.service'
import { CreateCatDto } from './dto/create-cat.dto'
import { UpdateCatDto } from './dto/update-cat.dto'
import { Cat } from './schemas/cat.schema'
import { ApiExtension, ApiHeader, ApiOperation, ApiParam, ApiProperty, ApiTags } from '@nestjs/swagger'

@ApiTags('小猫咪')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiExtension('x-author', 'DoveAz')
  @ApiOperation({
    summary: '哈哈',
    description: '你好啊',
  })
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    await this.catsService.create(createCatDto)
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll()
  }

  @Put(':id')
  async updateById(@Param() params, @Body() updateCatDto: UpdateCatDto): Promise<Cat> {
    return await this.catsService.updateById(params.id, updateCatDto)
  }
}
