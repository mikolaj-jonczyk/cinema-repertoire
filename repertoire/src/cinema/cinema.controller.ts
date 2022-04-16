import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Cinema } from './cinema.entity';
import { CinemaService } from './cinema.service';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';

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

  @Delete('/:id')
  deleteTask(@Param('id') id: string): Promise<void> {
    return this.cinemaService.deleteCinema(id);
  }

  @Put('/:id')
  updateCinema(
    @Param('id') id: string,
    @Body() updateCinemaDto: UpdateCinemaDto,
  ): Promise<void> {
    return this.cinemaService.updateCinema(id, updateCinemaDto);
  }
}
