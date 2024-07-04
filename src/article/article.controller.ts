import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

// Definimos el controlador de artículos. Un controlador es una clase que se encarga de manejar las peticiones HTTP relacionadas con los artículos.

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  // Definimos el método create, que recibe un objeto de tipo CreateArticleDto y crea un nuevo artículo en la base de datos.
  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  // Definimos el método findAll, que retorna todos los artículos de la base de datos.
  @Get()
  findAll() {
    return this.articleService.findAll();
  }

  // Definimos el método findOne, que recibe un id y retorna el artículo correspondiente.
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.articleService.findOne(id);
  }

  // Definimos el método update, que recibe un id y un objeto de tipo UpdateArticleDto, y actualiza el artículo
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return this.articleService.update(id, updateArticleDto);
  }

  // Definimos el método remove, que recibe un id y elimina el artículo correspond
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.articleService.remove(id);
  }
}
