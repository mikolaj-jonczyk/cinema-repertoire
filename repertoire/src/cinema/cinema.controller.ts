import { Body, Controller, Get, Post } from '@nestjs/common';
import { CinemaService } from './cinema.service';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { Cinema } from './cinema.model';

@Controller('cinema')
export class CinemaController {
  constructor(private cinemaService: CinemaService) {}

  @Get()
  getAllCinemas() {
    return this.cinemaService.getAllCinemas();
  }

  @Post()
  createCinema(@Body() createCinemaDto: CreateCinemaDto): Cinema {
    return this.cinemaService.createCinema(createCinemaDto);
  }
}
