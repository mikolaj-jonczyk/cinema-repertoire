import { Injectable } from '@nestjs/common';

import { Cinema } from './cinema.model';

@Injectable()
export class CinemaService {
  private cinemas: Cinema[] = [];

  getAllCinemas() {
    return this.cinemas;
  }
}
