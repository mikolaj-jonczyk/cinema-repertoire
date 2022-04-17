import { EntityRepository, Repository } from 'typeorm';

import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './movie.entity';

@EntityRepository(Movie)
export class MovieRepository extends Repository<Movie> {
  async getMovies(): Promise<Movie[]> {
    const query = this.createQueryBuilder('movie');

    const tasks = await query.getMany();
    return tasks;
  }

  async createMovie(createMovieDto: CreateMovieDto): Promise<Movie> {
    const {
      name,
      shortDescription,
      description,
      actors,
      time,
      director,
      image,
    } = createMovieDto;

    const movie = this.create({
      name,
      shortDescription,
      description,
      actors,
      time,
      director,
      image,
    });

    await this.save(movie);
    return movie;
  }

  async updateMovie(
    movie: Movie,
    updateMovieDto: UpdateMovieDto,
  ): Promise<void> {
    const { name, shortDescription, description, actors, time, director } =
      updateMovieDto;

    await this.update(movie.id, {
      name,
      shortDescription,
      description,
      actors,
      time,
      director,
    });
  }
}
