import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './movie.entity';
import { MovieRepository } from './movie.repository';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieRepository)
    private movieRepository: MovieRepository,
  ) {}

  async getMovieById(id: string): Promise<Movie> {
    const found = await this.movieRepository.findOne({ where: { id: id } });

    if (!found) {
      throw new NotFoundException(`Movie with ID: "${id}" not found.`);
    }

    return found;
  }

  async createMovie(createMovieDto: CreateMovieDto): Promise<Movie> {
    const { name, shortDescription, description, actors, time, director } =
      createMovieDto;

    const movie = this.movieRepository.create({
      name,
      shortDescription,
      description,
      actors,
      time,
      director,
    });

    await this.movieRepository.save(movie);
    return movie;
  }

  async getAllMovies(): Promise<Movie[]> {
    return await this.movieRepository.getMovies();
  }

  async deleteMovie(id: string): Promise<void> {
    const result = await this.movieRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Movie with ID"${id}" not found`);
    }
  }

  async updateMovie(id: string, updateMovieDto: UpdateMovieDto): Promise<void> {
    const { name, shortDescription, description, actors, time, director } =
      updateMovieDto;
    const found = await this.movieRepository.findOne({ where: { id: id } });

    if (!found) {
      throw new NotFoundException(`Movie with ID: "${id}" not found.`);
    }

    await this.movieRepository.update(found.id, {
      name,
      shortDescription,
      description,
      actors,
      time,
      director,
    });
  }
}
