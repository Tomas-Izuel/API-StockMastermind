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
import { ProviderService } from './provider.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';

@Controller('provider')
export class ProviderController {
  constructor(private readonly providerService: ProviderService) {}

  @Post()
  create(@Body() createProviderDto: CreateProviderDto) {
    return this.providerService.create(createProviderDto);
  }

  @Get()
  findAll() {
    return this.providerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.providerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProviderDto: UpdateProviderDto,
  ) {
    return this.providerService.update(+id, updateProviderDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.providerService.remove(+id);
  }
}