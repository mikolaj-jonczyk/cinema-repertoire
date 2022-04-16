import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { Cinema } from './cinema.entity';
import { CinemaService } from './cinema.service';
import { CreateCinemaDto } from './dto/create-cinema.dto';

@Controller('cinema')
export class CinemaController {
  constructor(private cinemaService: CinemaService) {}

  @Get('/:id')
  getCinemaById(@Param('id') id: string): Promise<Cinema> {
    return this.cinemaService.getCinemaById(id);
  }

  @Get()
  getAllCinemas() {
    return this.cinemaService.getAllCinemas();
  }

  @Post()
  createCinema(@Body() createCinemaDto: CreateCinemaDto): Promise<Cinema> {
    return this.cinemaService.createCinema(createCinemaDto);
  }
}
