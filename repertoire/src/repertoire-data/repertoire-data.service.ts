import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CinemaRepository } from '../cinema/cinema.repository';
import { MovieRepository } from '../movie/movie.repository';
import { CreateRepertoireDataDto } from './dto/create-repertoire.dto';
import { GetRepertoireFilterDto } from './dto/get-repertoire-filter.dto';
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

  async getRepertoireData(
    filterDto: GetRepertoireFilterDto,
  ): Promise<RepertoireData[]> {
    return this.repertoireDataRepository.getRepertoireData(filterDto);
  }

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

    return this.repertoireDataRepository.createRepertoireData(
      cinema,
      movie,
      showDate,
    );
  }

  async deleteRepertoireData(id: string): Promise<void> {
    const result = await this.repertoireDataRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Repertoire Data with ID"${id}" not found`);
    }
  }
}
