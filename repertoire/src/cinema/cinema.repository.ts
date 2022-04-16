import { EntityRepository, Repository } from 'typeorm';

import { Cinema } from './cinema.entity';

@EntityRepository(Cinema)
export class CinemaRepository extends Repository<Cinema> {
  async getCinemas(): Promise<Cinema[]> {
    const query = this.createQueryBuilder('cinema');

    const tasks = await query.getMany();
    return tasks;
  }
}
