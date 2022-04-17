import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Cinema } from './cinema.entity';
import { CinemaRepository } from './cinema.repository';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';

@Injectable()
export class CinemaService {
  constructor(
    @InjectRepository(CinemaRepository)
    private cinemaRepository: CinemaRepository,
  ) {}

  async getCinemaById(id: string): Promise<Cinema> {
    const found = await this.cinemaRepository.findOne({ where: { id: id } });

    if (!found) {
      throw new NotFoundException(`Cinema with ID: "${id}" not found.`);
    }

    return found;
  }

  async createCinema(createCinemaDto: CreateCinemaDto): Promise<Cinema> {
    return this.cinemaRepository.createCinema(createCinemaDto);
  }

  async getAllCinemas(): Promise<Cinema[]> {
    return await this.cinemaRepository.getCinemas();
  }

  async deleteCinema(id: string): Promise<void> {
    const result = await this.cinemaRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Cinema with ID"${id}" not found`);
    }
  }

  async updateCinema(
    id: string,
    updateCinemaDto: UpdateCinemaDto,
  ): Promise<void> {
    const cinema = await this.cinemaRepository.findOne({ where: { id: id } });

    if (!cinema) {
      throw new NotFoundException(`Cinema with ID: "${id}" not found.`);
    }

    await this.cinemaRepository.updateCinema(cinema, updateCinemaDto);
  }
}
