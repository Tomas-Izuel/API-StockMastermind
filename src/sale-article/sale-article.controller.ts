import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaleArticleService } from './sale-article.service';
import { CreateSaleArticleDto } from './dto/create-sale-article.dto';
import { UpdateSaleArticleDto } from './dto/update-sale-article.dto';

@Controller('sale-article')
export class SaleArticleController {
  constructor(private readonly saleArticleService: SaleArticleService) {}

  @Post()
  create(@Body() createSaleArticleDto: CreateSaleArticleDto) {
    return this.saleArticleService.create(createSaleArticleDto);
  }

  @Get()
  findAll() {
    return this.saleArticleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleArticleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaleArticleDto: UpdateSaleArticleDto) {
    return this.saleArticleService.update(+id, updateSaleArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleArticleService.remove(+id);
  }
}
