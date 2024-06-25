import { Injectable } from '@nestjs/common';
import { CreateSaleArticleDto } from './dto/create-sale-article.dto';
import { UpdateSaleArticleDto } from './dto/update-sale-article.dto';

@Injectable()
export class SaleArticleService {
  create(createSaleArticleDto: CreateSaleArticleDto) {
    return 'This action adds a new saleArticle';
  }

  findAll() {
    return `This action returns all saleArticle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saleArticle`;
  }

  update(id: number, updateSaleArticleDto: UpdateSaleArticleDto) {
    return `This action updates a #${id} saleArticle`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleArticle`;
  }
}
