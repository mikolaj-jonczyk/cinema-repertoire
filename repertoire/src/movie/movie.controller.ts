import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './movie.entity';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get('/:id')
  getMovieById(@Param('id') id: string): Promise<Movie> {
    return this.movieService.getMovieById(id);
  }

  @Get()
  getAllMovies() {
    return this.movieService.getAllMovies();
  }

  @Post()
  createMovie(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.movieService.createMovie(createMovieDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): Promise<void> {
    return this.movieService.deleteMovie(id);
  }

  @Put('/:id')
  updateMovie(
    @Param('id') id: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ): Promise<void> {
    return this.movieService.updateMovie(id, updateMovieDto);
  }
}
