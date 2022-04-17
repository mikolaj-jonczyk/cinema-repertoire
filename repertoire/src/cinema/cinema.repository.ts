import { EntityRepository, Repository } from 'typeorm';

import { Cinema } from './cinema.entity';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';

@EntityRepository(Cinema)
export class CinemaRepository extends Repository<Cinema> {
  async getCinemas(): Promise<Cinema[]> {
    const query = this.createQueryBuilder('cinema');

    const tasks = await query.getMany();
    return tasks;
  }

  async createCinema(createCinemaDto: CreateCinemaDto): Promise<Cinema> {
    const { name, location, email, mobile } = createCinemaDto;

    const cinema = this.create({
      name,
      location,
      email,
      mobile,
    });

    await this.save(cinema);
    return cinema;
  }

  async updateCinema(
    cinema: Cinema,
    updateCinemaDto: UpdateCinemaDto,
  ): Promise<void> {
    const { name, location, email, mobile } = updateCinemaDto;

    await this.update(cinema.id, {
      name,
      location,
      email,
      mobile,
    });
  }
}
