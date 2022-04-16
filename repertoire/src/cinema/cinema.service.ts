import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Cinema } from './cinema.entity';
import { CinemaRepository } from './cinema.repository';
import { CreateCinemaDto } from './dto/create-cinema.dto';

@Injectable()
export class CinemaService {
  constructor(
    @InjectRepository(CinemaRepository)
    private cinemaRepository: CinemaRepository,
  ) {}

  async getCinemaById(id: string): Promise<Cinema> {
    const found = await this.cinemaRepository.findOne({ where: { id: id } });

    if (!found) {
      throw new NotFoundException(`Task with ID: "${id}" not found.`);
    }

    return found;
  }

  async createCinema(createCinemaDto: CreateCinemaDto): Promise<Cinema> {
    const { name, location, email, mobile } = createCinemaDto;

    const cinema = this.cinemaRepository.create({
      name,
      location,
      email,
      mobile,
    });

    await this.cinemaRepository.save(cinema);
    return cinema;
  }

  async getAllCinemas(): Promise<Cinema[]> {
    return await this.cinemaRepository.getCinemas();
  }
}
