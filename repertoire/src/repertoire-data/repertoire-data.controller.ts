import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';

import { CreateRepertoireDataDto } from './dto/create-repertoire.dto';
import { GetRepertoireFilterDto } from './dto/get-repertoire-filter.dto';
import { RepertoireData } from './repertoire-data.entity';
import { RepertoireDataService } from './repertoire-data.service';

@Controller('repertoire-data')
export class RepertoireDataController {
  constructor(private repertoireDataService: RepertoireDataService) {}

  @Get()
  getAllMovies(@Query() filterDto: GetRepertoireFilterDto) {
    return this.repertoireDataService.getRepertoireData(filterDto);
  }

  @Post()
  createRepertoireData(
    @Body() createRepertoireDataDto: CreateRepertoireDataDto,
  ): Promise<RepertoireData> {
    return this.repertoireDataService.createRepertoireData(
      createRepertoireDataDto,
    );
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): Promise<void> {
    return this.repertoireDataService.deleteRepertoireData(id);
  }
}
