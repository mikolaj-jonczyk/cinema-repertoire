import { EntityRepository, Repository } from 'typeorm';

import { RepertoireData } from './repertoire-data.entity';
import { GetRepertoireFilterDto } from './dto/get-repertoire-filter.dto';
import { Cinema } from '../cinema/cinema.entity';
import { Movie } from '../movie/movie.entity';

@EntityRepository(RepertoireData)
export class RepertoireDataRepository extends Repository<RepertoireData> {
  async getRepertoireData(
    filterDto: GetRepertoireFilterDto,
  ): Promise<RepertoireData[]> {
    const { movieId, cinemaId } = filterDto;
    const query = this.createQueryBuilder('repertoire_data');

    if (cinemaId) {
      query.andWhere('repertoire_data.cinemaId = :cinemaId', {
        cinemaId,
      });
    }

    if (movieId) {
      query.andWhere('repertoire_data.movieId = :movieId', {
        movieId,
      });
    }

    const repertoireData = await query
      .leftJoinAndSelect('repertoire_data.cinema', 'cinema')
      .leftJoinAndSelect('repertoire_data.movie', 'movie')
      .getMany();
    return repertoireData;
  }

  async createRepertoireData(
    cinema: Cinema,
    movie: Movie,
    showDate: string,
  ): Promise<RepertoireData> {
    const repertoireData = this.create({
      cinema,
      movie,
      date: new Date(showDate),
    });

    await this.save(repertoireData);
    return repertoireData;
  }
}
