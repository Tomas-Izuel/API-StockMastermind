import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleArticleDto } from './create-sale-article.dto';

export class UpdateSaleArticleDto extends PartialType(CreateSaleArticleDto) {}
