import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { DemandHistoryService } from './demand-history.service';
import { CreateDemandHistoryDto } from './dto/create-demand-history.dto';
import { UpdateDemandHistoryDto } from './dto/update-demand-history.dto';

@Controller('demand-history')
export class DemandHistoryController {
  constructor(private readonly demandHistoryService: DemandHistoryService) {}

  @Post()
  create(@Body() createDemandHistoryDto: CreateDemandHistoryDto) {
    return this.demandHistoryService.create(createDemandHistoryDto);
  }

  @Get()
  findAll() {
    return this.demandHistoryService.findAll();
  }

  @Get('article/:article_id')
  getDemandHistoryByArticleId(
    @Param('article_id', ParseIntPipe) article_id: number,
  ) {
    return this.demandHistoryService.getDemandHistoryByArticleId(+article_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDemandHistoryDto: UpdateDemandHistoryDto,
  ) {
    return this.demandHistoryService.update(id, updateDemandHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.demandHistoryService.remove(id);
  }
}
