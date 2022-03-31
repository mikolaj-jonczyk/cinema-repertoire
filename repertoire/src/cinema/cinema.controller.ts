import { Controller, Get, Post } from '@nestjs/common';
import { CinemaService } from './cinema.service';

@Controller('cinema')
export class CinemaController {
  constructor(private cinemaService: CinemaService) {}

  @Get()
  getAllCinemas() {
    this.cinemaService.getAllCinemas();
  }
}
