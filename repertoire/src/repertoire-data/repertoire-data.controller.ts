import { Body, Controller, Post } from '@nestjs/common';

import { CreateRepertoireDataDto } from './dto/create-repertoire.dto';
import { RepertoireData } from './repertoire-data.entity';
import { RepertoireDataService } from './repertoire-data.service';

@Controller('repertoire-data')
export class RepertoireDataController {
  constructor(private repertoireDataService: RepertoireDataService) {}
  @Post()
  createRepertoireData(
    @Body() createRepertoireDataDto: CreateRepertoireDataDto,
  ): Promise<RepertoireData> {
    return this.repertoireDataService.createRepertoireData(
      createRepertoireDataDto,
    );
  }
}
