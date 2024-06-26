import { PartialType } from '@nestjs/mapped-types';
import { CreateProviderArticleDto } from './create-provider-article.dto';

export class UpdateProviderArticleDto extends PartialType(CreateProviderArticleDto) {}
