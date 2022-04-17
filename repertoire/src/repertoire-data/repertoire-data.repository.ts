import { EntityRepository, Repository } from 'typeorm';

import { RepertoireData } from './repertoire-data.entity';

@EntityRepository(RepertoireData)
export class RepertoireDataRepository extends Repository<RepertoireData> {
  async getRepertoireData(): Promise<RepertoireData[]> {
    const query = this.createQueryBuilder('movie');

    const tasks = await query.getMany();
    return tasks;
  }
}
