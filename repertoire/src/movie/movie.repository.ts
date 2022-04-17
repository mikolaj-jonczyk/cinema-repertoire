import { EntityRepository, Repository } from 'typeorm';

import { Movie } from './movie.entity';

@EntityRepository(Movie)
export class MovieRepository extends Repository<Movie> {
  async getMovies(): Promise<Movie[]> {
    const query = this.createQueryBuilder('movie');

    const tasks = await query.getMany();
    return tasks;
  }
}
