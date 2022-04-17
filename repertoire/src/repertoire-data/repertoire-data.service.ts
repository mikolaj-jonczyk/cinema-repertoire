import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CinemaRepository } from '../cinema/cinema.repository';
import { MovieRepository } from '../movie/movie.repository';
import { CreateRepertoireDataDto } from './dto/create-repertoire.dto';
import { RepertoireData } from './repertoire-data.entity';
import { RepertoireDataRepository } from './repertoire-data.repository';

@Injectable()
export class RepertoireDataService {
  constructor(
    @InjectRepository(RepertoireDataRepository)
    private repertoireDataRepository: RepertoireDataRepository,
    @InjectRepository(CinemaRepository)
    private cinemaRepository: CinemaRepository,
    @InjectRepository(MovieRepository)
    private movieRepository: MovieRepository,
  ) {}

  async createRepertoireData(
    createRepertoireDataDto: CreateRepertoireDataDto,
  ): Promise<RepertoireData> {
    const { cinemaId, movieId, showDate } = createRepertoireDataDto;
    const movie = await this.movieRepository.findOne({
      where: { id: movieId },
    });

    if (!movie) {
      throw new NotFoundException(`Movie with ID: "${movieId}" not found.`);
    }

    const cinema = await this.cinemaRepository.findOne({
      where: { id: cinemaId },
    });

    if (!cinema) {
      throw new NotFoundException(`Cinema with ID: "${cinemaId}" not found.`);
    }
    const repertoireData = this.repertoireDataRepository.create({
      cinema,
      movie,
      date: new Date(showDate),
    });

    await this.repertoireDataRepository.save(repertoireData);
    return repertoireData;
  }
}
